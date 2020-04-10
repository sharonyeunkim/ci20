/**** WHAT WE'RE DOING IN THIS FILE ****/
//1. Creating some dummy data for the example. For the actual project, replace this with the json fetch code
//2. Keep track of which recipe "tags" the user has selected
//3. Dynamically filter through your JSON data and show elements that match the user's tags

/**** STEP 0: SELECTING ELEMENTS ****/
var labels = document.querySelectorAll("label");
var recipeContainer = document.getElementById("recipe-container");

/****************************************************/
/**** STEP 1: FETCHING DATA & STARTING TO USE IT ****/
/****************************************************/
//NOTE: Replace this step with the JSON fetch functions once you're ready to integrate the data in your excel file

//Example data. Your excel file will be converted into an array of JavaScript objects, where each row on the spreadsheet
//         will be a unique JavaScript object. Each column "name, image, tags, etc." will become a property on the object and the data in the associated cell be the value of the property.

var json =
fetch("data.json")
  .then(function(blob){ return blob.json(); })
  .then(function(json){ buildPage(json); });

function buildPage(data) {
console.log(data);
};
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

//STEP 2.1: CREATE AN ARRAY TO STORE USER TAG SELECTION
var selectedTags = []; //an empty array that we will use to keep track of the tags the user has selected

//STEP 2.2: ADD TAG TRACKING FUNCTIONALITY INTO EACH LABEL ELEMENT
//NOTE: Learn more about the array forEach function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
labels.forEach(function (label) {
  label.addEventListener("click", toggleLabelSelection);
})

//STEP 2.3: DEFINE THE TAG TRACKING FUNCTIONALITY
//This is what is going to happen each time the user clicks on a label
function toggleLabelSelection(event) {
  //get what's written in the "for" attribute of the clicked label
  var labelFor = event.target.htmlFor;

  //select the "input" element that is associated with the label that was just clicked.
  //we do this because we need to see if the input was "checked" or "unchecked", aka whether the tag was selected or deselected by the user
  var labelInput = document.getElementById(labelFor)

  //check if the label is being selected or deselected, and add/remove the tag from the list accordingly
  if (!labelInput.checked) {
    //if the label was not checked and the user is checking it now, aka selecting the tag:
    //Add the value of the clicked label's "for" attribute to our selectedTags array, because it's now one of the tags the user is filtering through
    selectedTags.push(labelFor);
  } else {
    //if the label was checked and the user is unchecking it, aka deselecting the tag:
    //Remove the tag associated with the label from the list of selected labels
    //NOTE: Learn more about the array filter function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    selectedTags = selectedTags.filter(tag => tag !== labelFor);
  }

  //dynamically filter the recipes being shown based on the updated tag list
  showRecipes(selectedTags);
}

/***********************************************************/
/**** STEP 3: FILTER RECIPES AND GENERATE HTML ELEMENTS ****/
/***********************************************************/
//this function will be called each time the user clicks on a tag, selecting or deselecting it
function showRecipes(tags) {
  //STEP 3.1: CREATE AN ARRAY TO STORE THE RECIPES THAT MATCH THE USER'S SELECTED TAGS/FILTERS
  var selectedRecipes = []; //same pattern as selectedTags above

  //STEP 3.2: FILTER OUR ENTIRE RECIPE LIST TO ONLY THE RECIPES THAT HAVE MATCHING TAGS
  //Loop through each recipe on our data list:
  data.forEach(function (recipe) {
    //For each separate data point, see if it contains any of the tags the user has selected (accessible via the selectedTags array)
    //Loop through each tag the user has selected:
    selectedTags.forEach(function (tag) {
      //If a user-selected tag matches one of the tags the recipe has:
      if (recipe.tags.includes(tag)) {
        selectedRecipes.push(recipe); //add the recipe to the list of recipes to show
        return; //end the loop so that a recipe that has two matching recordings doesn't get listed twice
      }
      //NOTE: Learn more about the string includes function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
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
