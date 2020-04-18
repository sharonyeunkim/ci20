var data;
var selectedTags = [];
var labels = document.querySelectorAll("label");
// var recipeList = document.getElementById("recipeList");
var recipes = document.getElementById("recipes");
var recipeTemplate = document.getElementById("recipeTemplate");
var recipeInstructioncontainer = document.getElementById("recipeInstructioncontainer");
var recipeInstruction = document.getElementById("recipeInstruction");

/*** FETCH JSON DATA, ASSIGN IT TO OUR DATA VARIABLE ***/
fetch('data_6.json').then(function(response){
  return response.json();
}).then(function(json) {
  data = json;
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
// ******** 2) Template for Recipe Selection + listens to click *****//
// *******************************************************
function showRecipes() {
 var selectedRecipes = [];
  data.forEach(function (recipe) {  //could name it anything besides recipe.
    selectedTags.forEach(function (tag) {
      if (recipe.tags.includes(tag)) {
        selectedRecipes.push(recipe);
        return;
      }
    });
  });
  recipes.innerHTML = "";
  selectedRecipes.forEach(function (recipe) {
    var recipeListContainer = document.createElement('div');
    var recipeLink = document.getElementsByClassName('recipe-link');
    recipeListContainer.className = "recipe-link";
      var img = document.createElement('img');
        img.setAttribute('src', recipe.images);
      var h = document.createElement('H1'); //this is recipe.recipeTitle
          var t = document.createTextNode(recipe.recipeTitle);
          h.appendChild(t);
      var p = document.createElement('P');
          p.innerText = recipe.tags;
      p.appendChild(h);
      h.appendChild(img);
      recipeListContainer.append(img, h, p);
      recipeListContainer.style.width = "100VW";
      recipeListContainer.style.height = "100VW";
      recipeListContainer.style.background = "green";
      document.getElementById('recipes').appendChild(recipeListContainer)
      {

      }
    });
  }
       // lines 48 to 54 must be recoded using create element and append child. Then you can do
       //          on click handler for each thing in loop.
       // alternatively use createelement and append child to build DIV above.
       //  because h1.onclick = function() this can be the function to click when I call my title
       //  this function needs to clear recipe.inner.html"" (line 46) then does the same thing again
       //    rebuilds page with this full one screen page of recipe instructions.

       // recipeListContainer.forEach(recipeLink)
       //  {
       //   recipeLink.addEventListener("click", showrecipeInstructioncontainer);
       //  }

//*****************************************************
//********* Document Clicked Individual Recipe ***********
// *******  3) No, actually record data again**************************************


// h1.onclick = function(){}
//   recipe.inner.html.clear();
function toggleSelectedRecipe(event){
  var selectedRecipeContainer = [];
  var clicked = event.target.onclick;
  var clickedRecipeInstruction = document.getElementById(clicked);
      if (recipeInstruction == "clicked") {
        selectedRecipeContainer.push(clickedRecipeInstruction);
      } else {
        selectedRecipeContainer = selectedRecipeContainer.filter(tag => tag !== clicked);
      }
      showSelectedRecipe();
}
// *******************************************************
// ****** Shows the Selected Recipe ********
//*****************************************************
function showSelectedRecipe() {
 var selectedRecipe = [];
 var userSelectedRecipe = [];
  data.forEach(function (recipe) {  //could name it anything besides recipe.
    userSelectedRecipe.forEach(function (tag) {
      if (recipe.tags.includes(tag)) {
        selectedRecipe.push(recipe);
        return;
      }
    });
  });
  recipe.innerHTML = "";
  selectedRecipe.forEach(function (recipe) {
    var selectedRecipeContainer = document.createElement('div');
    var selectedRecipeLink = document.getElementsByClassName('selectedRecipe-link');
    selectedRecipeContainer.className = "selectedRecipe-link";
      var imgg = document.createElement('img');
        img.setAttribute('src', recipe.images);
      var hh = document.createElement('H1');
          var tt = document.createTextNode(recipe.recipeTitle);
          hh.appendChild(tt);
      var pp = document.createElement('P');
          pp.innerText = recipe.tags;
      pp.appendChild(hh);
      hh.appendChild(imgg);
      selectedRecipeContainer.append(imgg, hh, pp);
      selectedRecipeContainer.style.width = "100VW";
      selectedRecipeContainer.style.height = "100VW";
      selectedRecipeContainer.style.background = "pink";
      document.getElementById('recipeInstruction').appendChild(selectedRecipeContainer)
      { }
    });
  }
// ************************************************
document.getElementById('showMyRecipes').addEventListener('click', function(){
  recipeList.style.visibility = "visible"
}) ;
document.getElementById('closelist').addEventListener('click', function(){
  recipeList.style.visibility = "hidden"
}) ;
// recipeList.addEventListener('click', function(recipe){
//   recipeInstruction.style.visibility = "visible"
// }) ;
