import json
import random

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
WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="app"]/div[1]/nav[2]/button[2]'))).click()


# Add username and password
username = " "
password = " "

# find username/email field and send the username itself to the input field and click continue
driver.find_element(By.ID, "_input-2").send_keys(username)
driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div[2]/div/div[2]/form/div/button").click()
time.sleep(2)

# find password input field and insert password as well and click login button
driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div[2]/div/div[2]/form/div/div/div/input").send_keys(password)
driver.find_element(By.XPATH, "/html/body/div[2]/div/div/div[2]/div/div[2]/form/button").click()
time.sleep(2)

# Starting url
url = 'https://realfood.tesco.com/recipes/carbonara-pasta-bake.html'
driver.get(url)

bs = BeautifulSoup(driver.page_source, 'html.parser')

recipes = {}
title = []

# Change number to how many baskets you want to retrieve
while(len(recipes) < 30):
    if len(title) > 0:
        # Removing old recipe
        url = 'https://my.whisk.com/recipes'
        driver.get(url)
        time.sleep(10)
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div[2]/div[1]/div[2]/div[2]/div/div/div/div/div[2]/div/button'))).click()
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable(
            (By.XPATH, '/html/body/div[2]/div/div/div/button[5]'))).click()
        WebDriverWait(driver, 10).until(EC.element_to_be_clickable(
            (By.XPATH, '/html/body/div[1]/div[1]/div/div[2]/div[2]/div[2]/button[1]'))).click()



        # Get next recipe
        time.sleep(10)
        driver.back()
        driver.back()
        time.sleep(10)
        new_recipes_url = bs.find_all(class_='recipe-detail__promo-link')
        url = 'https://realfood.tesco.com' + bs.find('a', {'recipe-detail__promo-link'})['href']
        driver.get(url)
        bs = BeautifulSoup(driver.page_source, 'html.parser')
        new_recipe = bs.find('h1', {'recipe-detail__headline'}).get_text()
        for i in range(len(title)):
            if new_recipe in title:
                index = random.randint(0, 3)
                url = 'https://realfood.tesco.com' + new_recipes_url[index]['href']
                driver.get(url)
                bs = BeautifulSoup(driver.page_source, 'html.parser')
                break


    # Get title
    selected_recipe = bs.find('h1', {'recipe-detail__headline'}).get_text()
    title.append(selected_recipe)

    # Retrieving the ingredients
    ingredients = []
    unfiltered_ingredients = bs.find_all('li', {'class':'recipe-detail__list-item'}, limit=250)
    for ingredient in unfiltered_ingredients:
        filtered_ingredients = ingredient.get_text()
        ingredients.append(filtered_ingredients)

    # Retrieving protein details
    carbohydrates_protein_fibre = bs.find_all('strong', {'class':'recipe-detail__nutrition-text_bold'}, limit=3)
    protein = carbohydrates_protein_fibre[1].get_text()

    # Retrieving Fat details
    nutrition_label = bs.find_all('span', {'class':'recipe-detail__nutrition-value'})
    fat = nutrition_label[1].get_text().replace('\n', '')


    # Retrieving Baskets
    parent_dir = '/Baskets'
    recipe_directory = os.path.join(parent_dir, selected_recipe)
    os.mkdir(recipe_directory)
    images = bs.select('div img')
    recipe_path = os.path.join(recipe_directory, selected_recipe+".jpg")

    images_url = 'https://realfood.tesco.com'+images[1]['src']
    img_data = requests.get(images_url).content
    with open(recipe_path, 'wb') as handler:
        handler.write(img_data)


    # Adding items to shopping list
    WebDriverWait(driver, 10).until(EC.frame_to_be_available_and_switch_to_it(
        (By.XPATH, '/html/body/form/main/section[2]/div/div[2]/div/div[1]/div/iframe')))
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.XPATH, '//*[@id="app"]/div/div/div[2]/div[2]/div/div[4]'))).click()

    time.sleep(10)

    # Retrieving ingredients
    url = 'https://tesco.list-integration.whisk.com/list-checkout'
    driver.get(url)
    time.sleep(30)


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

    # Retrieving Baskets
    images = bs.select('div img')
    images2 = []

    for x in range(0, len(images), 2):
        images2.append(images[x])

    for i in range(len(images2)):
        ingredient_path = os.path.join(recipe_directory, ingredient_name[i] + ".jpg")
        images_url = images2[i]['src']
        img_data = requests.get(images_url).content
        with open(ingredient_path, 'wb') as handler:
            handler.write(img_data)

    # Creating dict and adding to main dict
    recipe = dict(ingredients=ingredients, protein=protein, fat=fat, ingredient_items=ingredient_items)
    recipes[selected_recipe] = recipe



# Serializing json
json_object = json.dumps(recipes)

# Writing to json file
with open("baskets.json", "w") as file:
    file.write(json_object)










