let shopping_cart = {
    "One-pot Mexican beef stew recipe": {
        ingredients: [
            ["Tesco Butter Beans", "400G", "£0.70"],
            ["Very Lazy Chillies Paste", "75G", "£1.85"],
            ["Tesco Organic Sunflower Oil", "1L", "£3.25"],
            ["Tesco Fresh Cut Coriander", "30G", "£0.52"],
            ["Loose Red Onions Class", "0.21kg", "£0.21"],
            ["Tesco Beef Stir Fry Strips", "357G", "£4.40"]],
        swaps: [["Beef Stir Fry Strips", "375G", "£4.40", "Tesco Chicken Fillets", "470G", "£4.60", "The beef by itself produces 25 kg of CO2 emissions for this recipe. How about reducing your carbon footprint with approx. 22 kg by swapping to chicken instead? "]]
    },
    "Spaghetti Bolognese recipe": {
        ingredients: [
            ["Napolina Chopped Tomatoes", "400G", "£0.80"],
            ["Tesco Olive Oil", "250Ml"," £1.90"],
            ["Parmigiano Reggiano", "100G", "£2.50"],
            ["The Straw Hat Red", "75Cl", "£4.25"],
            ["Tesco Bay Leaves", "3G", "£0.70"],
            ["Garlic", "4 Pack", "£0.79"],
            ["Loose Brown Onions", "0.12kg", "£0.12"],
            ["Angus Steak Mince", "500G", "£4.45"],
            ["Hearty Food Spaghetti", "500G", "£0.28"]],
        swaps: [["Angus Steak Mince", "500G", "£4.45", "Quorn Mince", "500G", "£3.15", "It takes 7700 liters of water to produce 500g of beef. That is the equivalent of taking 77 baths. How about trying this plant-based minced alternative instead?"]]
    },
    "Smash burgers recipe": {
        ingredients: [
            ["Brioche Burger Buns","4pk", "£1.20"],
            ["Beef Burgers", "454G", "£3.50"],
            ["Tesco Sandwich Pickle", "295G", "£1.00"],
            ["Tesco English Mustard", "190G", "£0.65"],
            ["Hellmann's Tomato Ketchup", "430Ml", "£1.25"],
            ["Tesco Mayonnaise", "450Ml", "£0.85"],
            ["Worcestershire Sauce", "150Ml", "£1.70"],
            ["Iceberg Lettuce", "Each", "£0.60"],
            ["Large Brown Onions", "2 Pack", "£1.00"],
            ["Sweet Vine Ripened Tomatoes", "255G", "£1.20"],
            ["Tesco Smoked Paprika", "48G", "£0.95"],
            ["Tesco Sliced Gherkins", "480G", "£1.60"]],
        swaps: [["Beef Burgers", "454G", "£3.50", "Chicken Fillets", "300G", "£4.95", "This recipe can also be prepared with chicken fillets instead of burgers. How about making chicken burgers instead, for just £1.45 more? "]]
    },
    "Buffalo chicken wings recipe": {
        ingredients: [
            ["Tesco Organic Plain Flour", "1Kg", "£1.45"],
            ["Askeys Treat Maple", "325G", "£1.50"],
            ["Chicken Wings", "900G", "£1.94"],
            ["Hellmann's Tomato Ketchup", "430Ml", "£1.25"],
            ["Tabasco Original Sauce", "57Ml", "£2.50"],
            ["Tesco Tomato Puree Tube", "200G", "£0.50"],
            ["Worcestershire Sauce", "150Ml", "£1.70"],
            ["Organic Unsalted Butter", "250G", "£2.75"],
            ["Low Fat Natural Yogurt", "500G", "£1.00"],
            ["Tesco Cut Chives", "20G", "£1.00"],
            ["Tesco Organic Garlic", "Each", "£0.65"],
            ["Shallots Onions", "300G", "£1.30"]],
        swaps: [["Chicken Wings", "900G", "£1.94", "Cauliflower Florets", "900G", "£1.10", "Cauliflower wings has been used as a similar replacement for meat-based wings. How about saving 0.80£ and trying cauliflower wings instead?"]]
    },
    "Beef enchiladas recipe": {
        ingredients: [
            ["Sliced Green Jalapeno Peppers","480G", "£1.15"],
            ["Angus Steak Mince","500G", "£4.45"],
            ["Ground Cumin Powder", "100G", "£1.15"] ,
            ["Loose Brown Onions", "0.12kg", "£0.12"],
            ["Napolina Passata","690G","£1.90"],
            ["Old El Paso Flour Tortillas","8Pk", "£1.45"],
            ["Medium Grated Cheddar","250G", "£2.65"],
            ["Tesco Dried Oregano","14G Jar", "£0.70"],
            ["Tesco Organic Garlic","Each", "£0.65"],
            ["Tesco Guacamole","163G", '£1.20'],
            ["Tesco Red Chillies","60G", '£0.70'],
            ["Tomato Puree Tube","200G", '£0.50']],
        swaps: [["Angus Steak Mince", "500G", "£4.45", "Tesco Black Beans"," 400G", '£0.55', 'Black beans work well as a substitute for minced beef in this recipe. Why not try swapping these products for some variety to your dish?']]
    },
    "Pesto chicken one-pot recipe": {
        ingredients: [
            ["Crusty White Farmhouse Loaf", "400G", "£1.00"],
            ["Anchovy In Olive Oil", "95G", "£2.80"],
            ["Tesco Dijon Mustard", "185G", "£0.65"],
            ["Green Pesto", "190G", "£1.25"],
            ["Birds Eye Garden Peas", "375G", "£1.60"],
            ["Tenderstem Broccoli", "200G", "£2.50"],
            ["Tesco Finest Thai Basil", "30G", "£0.90"],
            ["Tesco Organic Garlic", "Each", "£0.65"],
            ["Lemons Minimum", "4 Pack", "£0.50"],
            ["Large Brown Onions", "2 Pack", "£1.00"],
            ["Chicken Thighs", "1Kg", "£2.90"],
            ["Chicken Stock Cubes", "8Pk 88G", "£1.60"]],
        swaps: [["Chicken Thighs", "1Kg", "£2.90", "Wild Caught Salmon Fillets", "920G", "£27.20", "It takes 3 kg more of CO2 to produce the chicken, compared to wild-caught salmon. That is the equivalent of charging your smartphone 365 times. How about swapping to salmon instead?"]]
    }
}

// Add recipe name, e.g. "Beef enchiladas recipe"
let recipe = 'Beef enchiladas recipe';

// Adding images and products to the shopping cart
let tbody = document.getElementById("cart-items");
let ingredients = shopping_cart[recipe].ingredients;
const header = document.getElementsByClassName("recipe_header")[0];
header.textContent = recipe;

// Adding recipe image
let img_recipe = document.createElement("img");

// Add path to recipe directory
img_recipe.src = " "+"/"+recipe+".jpg";
img_recipe.alt = "Recipe Image";
const recipe_img = document.getElementById("image-Container")
// recipe_img.appendChild(img_recipe);

// Adding products to the basket
for(let i = 0; i < ingredients.length; i++){
    // Retrieving values
    var ingredient = ingredients[i][0]
    var details = ingredients[i][1]
    var price = ingredients[i][2]

    // Add path to the recipe directory
    var path = " "+"/"+ingredient+".jpg";

    // If the total amount of ingredients is larger than 5, we split the the basket into two lists
    if (ingredients.length > 5) {
        // Creating an img element
        if(i === (ingredients.length-1)) {
            let img = document.createElement("img");
            img.src = path;
            img.alt = "Image"
            img.className = "image"


            // Creating td elements
            let td_img = document.createElement("td")
            td_img.appendChild(img);

            let td_name = document.createElement("td")
            let td_about = document.createElement("td")
            let div_about = document.createElement("div")
            div_about.className = "about"
            let div_title = document.createElement("div")
            div_title.className = "title"
            div_title.innerHTML = ingredient
            let div_subtitle = document.createElement("div")
            div_subtitle.className = "subtitle"
            div_subtitle.innerHTML = details
            div_about.appendChild(div_title)
            td_about.appendChild(div_subtitle)
            td_name.appendChild(div_about)


            let td_amount = document.createElement("td");
            td_amount.className = 'amount'
            td_amount.innerHTML = price

            // Creating a tr element
            let tr = document.createElement("tr")
            tr.appendChild(td_img)
            tr.appendChild(td_name)
            tr.appendChild(td_about)
            tr.appendChild(td_amount)

            // appending the tr element to the body
            tbody.appendChild(tr)

            break;
        }
        // Creating img element
        let img = document.createElement("img");
        img.src = path;
        img.alt = "Image"
        img.className = "image"

        // Creating td elements
        let td_img = document.createElement("td")
        td_img.appendChild(img);


        let td_name = document.createElement("td")
        let td_about = document.createElement("td")
        let div_about = document.createElement("div")
        div_about.className = "about"
        let div_title = document.createElement("div")
        div_title.className ="title"
        div_title.innerHTML = ingredient
        let div_subtitle = document.createElement("div")
        div_subtitle.className="subtitle"
        div_subtitle.innerHTML = details
        div_about.appendChild(div_title)
        td_about.appendChild(div_subtitle)
        td_name.appendChild(div_about)


        let td_amount = document.createElement("td");
        td_amount.className = 'amount'
        td_amount.innerHTML = price

        // Getting next element as well
        var ingredient2 = ingredients[i+1][0]
        var details2 = ingredients[i+1][1]
        var price2 = ingredients[i+1][2]
        var path2 = recipe+"/"+ingredient2+".jpg";

        // Creating an img element
        let img2 = document.createElement("img");
        img2.src = path2;
        img2.alt = "Image"
        img2.className = "image"


        // Creating td elements
        let td_img2 = document.createElement("td")
        td_img2.appendChild(img2);

        let td_name2 = document.createElement("td")
        let td_about2 = document.createElement("td")
        let div_about2 = document.createElement("div")
        div_about2.className = "about"
        let div_title2 = document.createElement("div")
        div_title2.className ="title"
        div_title2.innerHTML = ingredient2
        let div_subtitle2 = document.createElement("div")
        div_subtitle2.className="subtitle"
        div_subtitle2.innerHTML = details2
        div_about2.appendChild(div_title2)
        td_about2.appendChild(div_subtitle2)
        td_name2.appendChild(div_about2)


        let td_amount2 = document.createElement("td");
        td_amount2.className = 'amount'
        td_amount2.innerHTML = price2


        // Create a tr element
        let tr = document.createElement("tr")
        tr.appendChild(td_img)
        tr.appendChild(td_name)
        tr.appendChild(td_about)
        tr.appendChild(td_amount)

        tr.appendChild(td_img2)
        tr.appendChild(td_name2)
        tr.appendChild(td_about2)
        tr.appendChild(td_amount2)


        const shoppingCart = document.getElementById("shopping-cart");
        shoppingCart.style.height = shoppingCart.offsetHeight + 40 + 'px';

        i+=1

        // append the tr element to the body
        tbody.appendChild(tr)

    }
    // When the ingredient list is less than 5 we add all ingredients to one list
    else{
        // Creating an img element
        let img = document.createElement("img");
        img.src = path;
        img.alt = "Image"
        img.className = "image"


        // Creating td elements
        let td_img = document.createElement("td")
        td_img.appendChild(img);


        let td_name = document.createElement("td")
        let td_about = document.createElement("td")
        let div_about = document.createElement("div")
        div_about.className = "about"
        let div_title = document.createElement("div")
        div_title.className ="title"
        div_title.innerHTML = ingredient
        let div_subtitle = document.createElement("div")
        div_subtitle.className="subtitle"
        div_subtitle.innerHTML = details
        div_about.appendChild(div_title)
        td_about.appendChild(div_subtitle)
        td_name.appendChild(div_about)


        let td_amount = document.createElement("td");
        td_amount.className = 'amount'
        td_amount.innerHTML = price


        // Create a tr element
        let tr = document.createElement("tr")
        tr.appendChild(td_img)
        tr.appendChild(td_name)
        tr.appendChild(td_about)
        tr.appendChild(td_amount)


        const shoppingCart = document.getElementById("shopping-cart");
        shoppingCart.style.height = shoppingCart.offsetHeight + 40 + 'px';


        // append the tr element to the body
        tbody.appendChild(tr)

    }

}


// Now we have to retrieve the swap will make
let swaps = shopping_cart[recipe].swaps;
for(let i = 0; i < swaps.length; i++) {

    // Adding original product
    const swap = document.getElementById("swap");
    let tr_swap = document.createElement("tr")

    // Getting image
    let img1 = document.createElement("img");
    let td_org = document.createElement("td");
    img1.src = "swaps/" + swaps[i][0] + ".jpeg";
    img1.alt = "Image"
    img1.className = "img-swap"
    td_org.appendChild(img1)

    //Getting title
    let td_org_name = document.createElement("td")
    let div_org_about = document.createElement("div")
    div_org_about.className = "about"
    let div_org_name = document.createElement("div")
    div_org_name.className = "title"
    div_org_name.innerHTML = swaps[i][0]
    let div_org_subtitle = document.createElement("div")
    div_org_subtitle.className = "subtitle"
    div_org_subtitle.innerHTML = swaps[i][1]
    div_org_about.appendChild(div_org_name)
    div_org_about.appendChild(div_org_subtitle)
    td_org_name.appendChild(div_org_about)


    // Getting price
    let td_org_price = document.createElement("td");
    td_org_price.className = "amount"
    td_org_price.innerHTML = swaps[i][2];

    //Adding image and title
    tr_swap.appendChild(td_org);
    tr_swap.appendChild(td_org_name);

    // adding price
    let tr_price = document.createElement("tr")
    tr_price.className="tr_price"
    tr_price.appendChild(td_org_price)



    // Adding arrow
    let img2 = document.createElement("img");
    img2.src = "arrows.jpg";
    img2.alt = "Image"
    img2.className = "arrow"
    let td_arrow = document.createElement("td");
    td_arrow.appendChild(img2)
    tr_swap.appendChild(td_arrow)

    // Adding swapping product
    let img3 = document.createElement("img");
    let td_swap = document.createElement("td");
    img3.src = "swaps/" + swaps[i][3] + ".jpeg";
    img3.alt = "Image"
    img3.className ="swapped_img"
    td_swap.appendChild(img3);

    //Getting title
    let td_swap_name = document.createElement("td")
    let div_swap_about = document.createElement("div")
    div_swap_about.className = "about"
    let div_swap_name = document.createElement("div")
    div_swap_name.className = "title text"
    div_swap_name.innerHTML = swaps[i][3]
    let div_swap_subtitle = document.createElement("div")
    div_swap_subtitle.className = "subtitle text"
    div_swap_subtitle.innerHTML = swaps[i][4]
    div_swap_about.appendChild(div_swap_name)
    div_swap_about.appendChild(div_swap_subtitle)
    td_swap_name.appendChild(div_swap_about)

    // Getting price
    let td_swap_price = document.createElement("td");
    td_swap_price.className = "amount"
    td_swap_price.innerHTML = swaps[i][5];

    // Adding image and title
    tr_swap.appendChild(td_swap);
    tr_swap.appendChild(td_swap_name);

    // adding price
    tr_price.appendChild(td_swap_price)

    swap.appendChild(tr_swap);
    swap.appendChild(tr_price);

    // Adding explanation
    const explanation = document.getElementById("explanation");
    let header_explanation = document.createElement("h3");
    header_explanation.innerHTML = swaps[i][6];
    explanation.appendChild(header_explanation)

}


