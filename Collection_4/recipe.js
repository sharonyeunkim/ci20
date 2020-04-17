var data;
var selectedTags = [];
var labels = document.querySelectorAll("label");
var recipeContainer = document.getElementById("recipe-container");

/*** FETCH JSON DATA, ASSIGN IT TO OUR DATA VARIABLE ***/
fetch('data_3.json').then(function(response){
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

  recipeContainer.innerHTML = "";
  selectedRecipes.forEach(function (recipe) {   //current recipe is dynamically linked
    var recipeLink = `
    <div class="recipe-link">
      <h1>${recipe.recipeTitle}</h1>
      <img src="${recipe.images}">
      <p>${recipe.tags}</p> 
    </div>
    `;
    recipeContainer.innerHTML += recipeLink;
  });
}
