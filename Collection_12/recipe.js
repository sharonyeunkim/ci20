var data;
var listOfCategories = {}
var labels = document.querySelectorAll("label");
// var recipeList = document.getElementById("recipeList");
var selectedTags = [];
var recipe

var recipes = document.getElementById("recipes");
var recipeTemplate = document.getElementById("recipeTemplate");
var recipeInstructioncontainer = document.getElementById("recipeInstructioncontainer");
var recipeInstruction = document.getElementById("recipeInstruction");

/*** FETCH JSON DATA, ASSIGN IT TO OUR DATA VARIABLE ***/
fetch('new.json').then(function(response) {
    return response.json();
}).then(function(json) {
    data = json.RecipeList;

    //assemble categories
    data.forEach((item, index) => {
      item.tags.split(' ').forEach((tag) => {listOfCategories[tag] = true})
      item.index = index;
    })

    labels.forEach(function(label) {
        label.addEventListener("click", toggleLabelSelection);
    })
    console.log(data) //
    populateTags(listOfCategories)
});
// *******************************************************
// ********* 1) Recording user imput ****** //
// *******************************************************
function toggleLabelSelection(event) {
    var labelFor = event.target.htmlFor;
    var labelInput = document.getElementById(labelFor);
    if (!labelInput.checked) {
        selectedTags.push(labelFor);
    } else {
        selectedTags = selectedTags.filter(tag => tag !== labelFor);
    }
    showRecipes(); //this gives template for recipe selection
}


  ////We want to populate the tags based on the JSON data tags that we find
  // function populateTags(listOfCategories){
  //   //This is the target div, that we put the tags in
  //   var filterParagraph = document.getElementById('filter-paragraph')
  //   //walk through all the tags we found
  //   for(var tag in listOfCategories){
  //     console.log(tag)
  //     //for each tag, make an input, make a label
  //     var input = document.createElement('input')
  //     var label = document.createElement('label')
  //     input.type = "checkbox"// this line needs attention, I don't know if it works like that
  //     input.name = tag //same here
  //     input.classList.add('tag') //this class makes it so you can select the input using javascript... getElementsByClassName('tag')
  //     label.for = tag
  //     label.innerHTML = tag
  //     label.classList.add('tagLabel')//this class makes it so you can select the label using css
  //     filterParagraph.append(input, label)//apend to that section
  //     filterParagraph.innerHTML += ", ";
  //   }
  // }


function showRecipes() {
    var selectedRecipes = [];
    data.forEach(function(recipe) { //could name it anything besides recipe.
        // console.log(data);
        selectedTags.forEach(function(tag) {
            if (recipe.tags.includes(tag)) {
                selectedRecipes.push(recipe);
                return;
            }
        });
    });
    recipes.innerHTML = "";
    selectedRecipes.forEach(function(recipe, index) {
        var DOMrecipeListContainer = document.createElement('div');
        DOMrecipeListContainer.className = "recipe-link";
        var img = document.createElement('img');
        img.setAttribute('src', recipe.images);
        var h = document.createElement('H1'); //this is recipe.recipeTitle
        var t = document.createTextNode(recipe.recipeTitle);
        h.appendChild(t);
        var p = document.createElement('P');
        p.innerText = recipe.tags;
        p.appendChild(h);
        h.appendChild(img);
        DOMrecipeListContainer.append(img, h, p);
        // DOMrecipeListContainer.style.width = "500px";
        // DOMrecipeListContainer.style.height = "500px";
        DOMrecipeListContainer.style.background = "blue";
        DOMrecipeListContainer.dataset.index = index;
        document.getElementById('recipes').appendChild(DOMrecipeListContainer);

    });
    var recipeHTMLcollection = document.getElementsByClassName('recipe-link')
    for (var recipe in recipeHTMLcollection) {
        if (!recipeHTMLcollection[recipe] && !recipeHTMLcollection[recipe].nodeType) {
            continue;
        };
        console.log(recipeHTMLcollection[recipe]);
        recipeHTMLcollection[recipe].addEventListener("click", function(event) {
            var i = event.currentTarget.dataset.index;
            console.log(i);
            toggleRecipeSelection(i)
        })
    }
};

function toggleRecipeSelection(event) {
    console.log("im working");
}

function toggleRecipeSelection(index) {
    var targetDiv = document.getElementById('individualRecipe');
    targetDiv.innerHTML = ""; // where to attatch later on
    var recipe = data[index]

    var div = document.createElement('div');
    div.className = "recipe-container";

    var imgDiv = document.createElement('div');
    imgDiv.style.backgroundImage = `url(${recipe.images})`;
    imgDiv.className = 'imageDiv';

    var h = document.createElement('H1'); //this is recipe.recipeTitle
    var t = document.createTextNode(recipe.recipeTitle);
    h.appendChild(t);


    var recipeText = document.createElement('div');
    recipeText.classList.add('recipeText')


    var h3yield = document.createElement('H3');
    var h3time = document.createElement('H3');
    h3yield.innerText = `Yield: ${recipe.yield}`
    h3time.innerText = `Yield: ${recipe.time}`

    // ul, iterate over list of items, create li for each, append to ul
    var ul = document.createElement('ul');
    ul.classList.add("ingredientsList");
    var h3preparation = document.createElement('H3');
    h3preparation.innerText = "Ingredients"
    ul.appendChild(h3preparation)
    recipe.ingredients.forEach((item) => {
        var li = document.createElement("li")
        li.innerText = item;
        ul.appendChild(li)
    })

    // ol, iterate over list of items, create li for each, append to ol
    var ol = document.createElement('ol');
    ol.classList.add("preparationsList");
    var h3ingredients = document.createElement('H3');
    h3ingredients.innerText = "Preparation"
    ol.appendChild(h3ingredients)
    recipe.preparation.forEach((item) => {
        var li = document.createElement("li")
        li.innerText = item;
        ol.appendChild(li)
    })
    // p.appendChild(h);
    // h.appendChild(img);
    recipeText.append(h, h3yield, h3time, ul, ol)
    div.append(imgDiv,recipeText);
    // div.style.width = "500px";
    // div.style.height = "500px";
    // div.style.background = "pink";
    div.dataset.index = index;
    targetDiv.appendChild(div);
};
// var DOMrecipeListContainer = document.createElement('div');
// DOMrecipeListContainer.className = "recipe-link";
// var img = document.createElement('img'); DOMrecipeListContainer.style.width = "100VW";
// img.setAttribute('src', recipe.images);
// DOMrecipeListContainer.appendChild(img);
// DOMrecipeListContainer.style.height = "100VW";
// DOMrecipeListContainer.style.background = "green";
// document.recipes.appendChild(DOMrecipeListContainer);
//*****************************************************
//********* Document Clicked Individual Recipe ***********
// *******  3) No, actually record data again**************************************
// *******************************************************

//*****************************************************
// ************************************************
document.getElementById('showMyRecipes').addEventListener('click', function() {
    recipeList.style.visibility = "visible"
});
document.getElementById('closelist').addEventListener('click', function() {
    recipeList.style.visibility = "hidden"
});
