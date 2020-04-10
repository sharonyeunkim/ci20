/**** WHAT WE'RE DOING IN THIS FILE ****/
//1. Creating some dummy data for the example. For the actual project, replace this with the json fetch code
//2. Keep track of which recipe "tags" the user has selected
//3. Dynamically filter through your JSON data and show elements that match the user's tags


var labels = document.querySelectorAll("label");
var recipeContainer = document.getElementById("recipe-container");

/****************************************************/
/**** STEP 1: FETCHING DATA & STARTING TO USE IT ****/
/****************************************************/
//NOTE: Replace this step with the JSON fetch functions once you're ready to integrate the data in your excel file


data = '[{"RecipeTitle" : "", "Type" : ""}]';
function load() {
    var data = JSON.parse(data);
    console.log(someData_notJSON[0].red);
    }
var json = ("data.json");
console.log(json);

// var data = ('dataCopy.json');
// function realData(data) {
//   var json = '{"RecipeTitle": "", "Type": "", "Taste": "", "Attributes"; "",}';
// }
// var json = data
// var data = [
//   {
//     name: "tartar sauce",
//     image: "recipe-1.jpg",
//     tags: "breakfast, easy-to-make, salty",
//     recipe: "blah de daah"
//   },
//   {
//     name: "recipe-2",
//     image: "recipe-2.jpg",
//     tags: "dinner, easy-to-make, sweet",
//     recipe: "blah de daah"
//   },
//   {
//     name: "recipe-3",
//     image: "recipe-3.jpg",
//     tags: "lunch, breakfast, salty",
//     recipe: "blah de daah"
//   }
// ];

//IMPORTANT NOTE: WHEN YOU ADD THE JSON FETCH INSTEAD OF THE ARRAY ABOVE, REPLACE THE CONTENTS OF THE LAST ".then()BLOCK WITH THE FOLLOWING:"
//data = json;
//ALSO, ADD THE FOLLOWING LINE OF CODE JUST BEFORE THE FETCH FUNCTION:
//var data;

/**************************************************/
/**** STEP 2: KEEP TRACK OF USER-SELECTED TAGS ****/
/**************************************************/

var selectedTags = []; //an empty array that we will use to keep track of the tags the user has selected

labels.forEach(function (label) {
  label.addEventListener("click", toggleLabelSelection);
})

function toggleLabelSelection(event) {
  var labelFor = event.target.htmlFor;

  var labelInput = document.getElementById(labelFor)


  if (!labelInput.checked) {
    selectedTags.push(labelFor);
  } else {
    selectedTags = selectedTags.filter(tag => tag !== labelFor);
  }

  showRecipes(selectedTags);
}

/***********************************************************/
/**** STEP 3: FILTER RECIPES AND GENERATE HTML ELEMENTS ****/
/***********************************************************/

function showRecipes(tags) {

  var selectedRecipes = []; //same pattern as selectedTags above


    //Loop through each tag the user has selected:
    selectedTags.forEach(function (tag) {
      if (recipe.tags.includes(tag)) {
        selectedRecipes.push(recipe); //add the recipe to the list of recipes to show
        return; //end the loop so that a recipe that has two matching recordings doesn't get listed twice
      }
    });
  });

  //STEP 3.3: SHOW THE FILTERED LIST OF RECIPES INSIDE THE RECIPECONTAINER ELEMENT (selected on line 8)
  recipeContainer.innerHTML = ""; //delete the previous recipes shown by the previous set of filters

  //loop through each recipe object that is in the selected recipes array:
  selectedRecipes.forEach(function(recipe) {

    //Create an HTML element as a string. The content of the element is going to be dynamically added from the recipe data. We're using TEMPLATE LITERALS to add the dynamic content in an easy to read fashion: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //NOTE: This is where you should design the HTML element that is going to show the data you want to show for each recipe. You can write HTML here as you'd write it in an HTML file, except you can set the data up dynamically, creating an HTML element with the data from each recipe you loop through!
    var recipeLink = `
    <div class="recipe-link">
      <img src="${recipe.image}">
      <h1>${recipe.name}</h1>
      <p>${recipe.tags}</p>
    </div>
    `;

    recipeContainer.innerHTML += recipeLink; //Add the newly created recipe element into our HTML.
  });
}
