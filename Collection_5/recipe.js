var data;
var selectedTags = [];
var labels = document.querySelectorAll("label");
var recipeContainer = document.getElementById("recipe-container");
var recipes = document.getElementById("recipes");
var detailRecipe = document.getElementById("detailRecipe");

/*** FETCH JSON DATA, ASSIGN IT TO OUR DATA VARIABLE ***/
fetch('data_5.json').then(function(response){
  return response.json();
}).then(function(json) {
  data = json;
  labels.forEach(function (label) {
    label.addEventListener("click", toggleLabelSelection);
  })
});

function toggleLabelSelection(event) {
  var labelFor = event.target.htmlFor;
  var labelInput = document.getElementById(labelFor);

  if (!labelInput.checked) {
    selectedTags.push(labelFor);
  } else {
    selectedTags = selectedTags.filter(tag => tag !== labelFor);
  }

  showRecipes();
}

function showRecipes() {

 var selectedRecipes = [];

//  console.log(data);
  data.forEach(function (recipe) {  //could name it anything besides recipie.
    selectedTags.forEach(function (tag) {
      if (recipe.tags.includes(tag)) {
        selectedRecipes.push(recipe);
        return;
      }
    });
  });

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
}

document.getElementById('show').addEventListener('click', function(){
  recipeContainer.style.visibility = "visible"
}) ;
document.getElementById('close').addEventListener('click', function(){
  recipeContainer.style.visibility = "hidden"
}) ;
document.getElementById('show').addEventListener('click', function(){
  recipeContainer.style.visibility = "visible"
}) 
