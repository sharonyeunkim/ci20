console.log("hello");

// 1. first access JSON file
// 2. document the user click --> addEventListener
// 3. from that event assign what they clicked to data.type, data.attribute, etc.
//     create new variable to store that data info ex var match
// 4. then push into a new variable ex: show.push(match)

var labels = document.querySelectorAll("label");
var recipeContainer = document.getElementById("recipe-container");

// 1. Fetching data //
fetch("data.json")
    .then(function(blob){
      return blob.json();
    })
    .then(function(data){
      documentClick(data);
    });

// console logging data//
function documentClick(data) {
  console.log(data);
  labels.forEach(function (label) {
  label.addEventListener("click", toggleLabelSelection);
})
};
//
function toggleLabelSelection(event) {
  var recipeContainer = [];
  var labelFor = event.target.htmlFor;
             console.log(labelFor);
  var labelInput = document.getElementById(labelFor);
            // console.log(labelInput);
  if (!labelInput.checked) {
    recipeContainer.push(labelFor); // push where?
  } else {
 recipeContainer = recipeContainer.filter(attribute => attribute !== labelFor);
  }
  showRecipes();
}

///trying to connect data to that statement//
function showRecipes(attributes) {
  data.forEach(function (RecipeTitle) {   //this line is looping through for matches
  data.forEach(function (Atrributes) {
    if (recipe.Attributes.includes(Attributes)) {
    recipe.push(RecipeTitle); //add the recipe to the list of recipes to show
    return; //end the loop so that a recipe that has two matching recordings doesn't get listed twice
  }
  });
  });
recipeContainer.innerHTML = "";

selectedRecipes.forEach(function(recipe) {

    var recipeLink = `
    <div class="recipe-link">
      <img src="${recipe.image}">
      <h1>${recipe.name}</h1>
      <p>${recipe.tags}</p>
    </div>
    `;

    recipeContainer.innerHTML += recipeLink; //Add the newly created recipe element into our HTML.
});
};

//   var data = data;
//   var breakfast = data.filter(function(entry){ return entry.Type == "BREAKFAST"; });
//   var breakfast = data.filter(function(entry){ return entry.Type == "BREAKFAST"; });
//
//   for (var i = 0; i < data.length; i = i + 1) {
//   console.log(data[i]);     //  this is showing all recipes from loop
//     }
//
//   if (labelFor = "breakfast,") {
//     recipeContainer.push(breakfast);
//     }
//   console.log(breakfast);
//   showRecipes();
//
//
//   };
//
// function showRecipes(attributes) {
//
