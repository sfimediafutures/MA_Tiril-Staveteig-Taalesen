import json

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.options import Options
import time
import requests
import os.path
import re


chrome_options = Options()
chrome_options.add_argument("start-maximized")
chrome_options.add_argument("--disable-popup-blocking")

# Login to whisk
url = "https://my.whisk.com/"
driver = webdriver.Chrome(executable_path='/chromedriver', options=chrome_options)
driver.get(url)
WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div[1]/nav[2]/button'))).click()


# Add username and password to whisk
username = ""
password = ""

# find username/email field and send the username itself to the input field and click continue
time.sleep(2)
driver.find_element(By.ID, "_input-1").send_keys(username)
driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div[2]/div/div[2]/form/div/button").click()
time.sleep(2)

# find password input field and insert password as well and click login button
time.sleep(2)
driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div[2]/div/div[2]/form/div/div/div/input").send_keys(password)
driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div[2]/div/div[2]/form/button").click()
time.sleep(2)

# Retrieving ingredients
url = 'https://tesco.list-integration.whisk.com/list-checkout'
driver.get(url)
time.sleep(20)


# Get the html content
data_ingredients = driver.find_element(By.XPATH, '/html/body/div/div[2]/div[2]/div/div/div/main')
info_ingredients = data_ingredients.get_attribute('innerHTML')
bs = BeautifulSoup(info_ingredients, 'html.parser')

ingredient_name_and_price = bs.find_all('span', {'class': 'sc-9hjha dDnGoG'}, limit=250)

ingredient_name = []
ingredient_items = []
for item in ingredient_name_and_price:
    ingredient_text = item.get_text()
    name_and_price = re.split('^(.+?),', ingredient_text)
    ingredient_name.append(name_and_price[1])
    ingredient_items.append(ingredient_text)

for names in ingredient_name:
    name = re.sub('\/', '', names)
    index = ingredient_name.index(names)
    ingredient_name.remove(names)
    ingredient_name.insert(index, name)


# Retrieving Baskets
images = bs.select('div img')
images2 = []

for x in range(0, len(images), 2):
    images2.append(images[x])

# Add path to swaps directory
swaps_directory = " "

for i in range(len(images2)):
    ingredient_path = os.path.join(swaps_directory, ingredient_name[i] + ".jpg")
    images_url = images2[i]['src']
    img_data = requests.get(images_url).content
    with open(ingredient_path, 'wb') as handler:
        handler.write(img_data)

# Creating dict and adding to main dict
ingredient_swaps = dict(ingredient_items=ingredient_items)


# Serializing json
json_object = json.dumps(ingredient_swaps, ensure_ascii=False)

# Writing to json file
with open("swaps.json", "a") as file:
    file.write(json_object)