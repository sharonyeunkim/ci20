var data;
var selectedTags = [];
var labels = document.querySelectorAll("label");
var recipeList = document.getElementById("recipeList");
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
// ******** 2) Template for Recipe Selection *****//
// *******************************************************
function showRecipes() {
 var selectedRecipes = [];
  data.forEach(function (recipe) {  //could name it anything besides recipie.
    selectedTags.forEach(function (tag) {
      if (recipe.tags.includes(tag)) {
        selectedRecipes.push(recipe);
        return;
      }
    });
  }); // ***** below pushes it into HTML  ****
  recipes.innerHTML = "";
  selectedRecipes.forEach(function (recipe) {   //current recipe is dynamically linked
    var recipeLink = `
    <div class="recipe-link">
      <img src="${recipe.images}">
      <h1>${recipe.recipeTitle}</h1>
      <p>${recipe.tags}</p>
    </div>
    `;
    recipes.innerHTML += recipeLink;
  });
  showrecipeInstructioncontainer();
}
//*****************************************************
//********* Document Clicked Individual Recipe ***********
// *******  3) No, actually record data again**************************************
// *******************************************************
function showrecipeInstructioncontainer() {
  var selectedRecipe = event.target.recipe;
  var clickedRecipe = document.getElementById('recipeInstruction');

  recipeLink.addEventListener("click", showTHATrecipe()) {
    console.log("i'm clicked");
  }
};
//*****************************************************
//********* SHOW THAT Clicked Individual Recipe ***********
// ************************************************
function showTHATrecipe() {
var thatRecipe = {};
 recipe.innerHTML = "";
 thatRecipe.forEach(function (recipe) {   //current recipe is dynamically linked
   var theRecipe = `
   <div class="recipe-link">
     <img src="${recipe.images}">
     <h1>${recipe.recipeTitle}</h1>
     <p>${recipe.tags}</p>
   </div>
   `;
   recipe.innerHTML += theRecipe;
 });
}

//*****************************************************
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
