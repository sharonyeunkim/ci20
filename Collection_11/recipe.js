var data;
var labels = document.querySelectorAll("label");
// var recipeList = document.getElementById("recipeList");
var selectedTags = [];
var recipe
var recipes = document.getElementById("recipes");
var recipeTemplate = document.getElementById("recipeTemplate");
var recipeInstructioncontainer = document.getElementById("recipeInstructioncontainer");
var recipeInstruction = document.getElementById("recipeInstruction");

/*** FETCH JSON DATA, ASSIGN IT TO OUR DATA VARIABLE ***/
fetch('new.json').then(function(response){
  return response.json();
}).then(function(json) {
  data = json.RecipeList;
  labels.forEach(function (label) {
    label.addEventListener("click", toggleLabelSelection);
  })
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

// *******************************************************
// ******** 2) Template for Recipe Selection *****//
// *******************************************************
function showRecipes() {
 var selectedRecipes = [];
  data.forEach(function (recipe) {  //could name it anything besides recipe.
    // console.log(data);
    selectedTags.forEach(function (tag) {
      if (recipe.tags.includes(tag)) {
        selectedRecipes.push(recipe);
        return;
      }
    });
  });
  recipes.innerHTML = "";
  selectedRecipes.forEach(function (recipe, index) {
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
  for(var recipe in recipeHTMLcollection) {
    if (!recipeHTMLcollection[recipe] && !recipeHTMLcollection[recipe].nodeType){
      continue;
    };
    console.log(recipeHTMLcollection[recipe]);
    recipeHTMLcollection[recipe].addEventListener("click", function(event){
      var i = event.currentTarget.dataset.index;
      console.log(i);
    })
  }
};

function toggleRecipeSelection(event){
  console.log("im working");
}
function toggleRecipeSelection(){
  var targetDiv =  document.getElementById('individualRecipe');
  targetDiv.innerHTML = ""; // where to attatch later on
  var recipe = data[index]

    var div = document.createElement('div');
    div.className = "recipe-container";
      var img = document.createElement('img');
        img.setAttribute('src', recipe.images);
      var h = document.createElement('H1'); //this is recipe.recipeTitle
          var t = document.createTextNode(recipe.recipeTitle);
          h.appendChild(t);
      var i = document.createElement('P');
          i.innerText = recipe.ingredients;
      var p = document.createElement('P');
          p.innerText = recipe.preparation;
      // p.appendChild(h);
      // h.appendChild(img);
      div.append(img, h, i, p);
      div.style.width = "500px";
      div.style.height = "500px";
      div.style.background = "pink";
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
document.getElementById('showMyRecipes').addEventListener('click', function(){
  recipeList.style.visibility = "visible"
}) ;
document.getElementById('closelist').addEventListener('click', function(){
  recipeList.style.visibility = "hidden"
}) ;
