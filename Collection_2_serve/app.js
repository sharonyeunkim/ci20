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



// cd into directory
// php -S localhost:8000
fetch("data.json")
    .then(function(blob){ return blob.json(); })
    .then(function(json){ buildPage(json); });

//in below line computer knows data = json inside buildPage();
function buildPage(data) { //anything that relates to data must happen in this function
  var selectedTags = []; //an empty array that we will use to keep track of the tags the user has selected

  //STEP 2.2: ADD TAG TRACKING FUNCTIONALITY INTO EACH LABEL ELEMENT

    labels.forEach(function (label) {
      label.addEventListener("click", toggleLabelSelection);
    })

  //STEP 2.3: DEFINE THE TAG TRACKING FUNCTIONALITY
    function toggleLabelSelection(event) {
      var labelFor = event.target.htmlFor;
      var labelInput = document.getElementById(labelFor)


    if (!labelInput.checked) {
      selectedTags.push(labelFor);
    } else {
      selectedTags = selectedTags.filter(tag => tag !== labelFor);
    }

    //dynamically filter the recipes being shown based on the updated tag list
    showRecipes(selectedTags);
  }}

  /***********************************************************/
  /**** STEP 3: FILTER RECIPES AND GENERATE HTML ELEMENTS ****/
  /***********************************************************/
  function showRecipes(tags) {
    //STEP 3.1: CREATE AN ARRAY TO STORE THE RECIPES THAT MATCH THE USER'S SELECTED TAGS/FILTERS
    var selectedRecipes = []; //same pattern as selectedTags above

    //STEP 3.2: FILTER OUR ENTIRE RECIPE LIST TO ONLY THE RECIPES THAT HAVE MATCHING TAGS
    //Loop through each recipe on our data list:
    data.forEach(function (RecipeTitle) {
      //For each separate data point, see if it contains any of the tags the user has selected (accessible via the selectedTags array)
      //Loop through each tag the user has selected:
      selectedTags.forEach(function (Attribute) {
        //If a user-selected tag matches one of the tags the recipe has:
        if (recipe.Attributes.includes(Attribute)) {
          selectedRecipes.push(RecipeTitle); //add the recipe to the list of recipes to show
          return; //end the loop so that a recipe that has two matching recordings doesn't get listed twice
        }
        //NOTE: Learn more about the string includes function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
      });
    });
  console.log(data);
}


// function realData(data) {
//  var data = [
//    {
//     "RecipeTitle": "",
//     "Type": "",
//     "Taste": "",
//     "Attributes"; ""
//     }
// ];
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

//STEP 2.2: ADD TAG TRACKING FUNCTIONALITY INTO EACH LABEL ELEMENT

labels.forEach(function (label) {
  label.addEventListener("click", toggleLabelSelection);
})

//STEP 2.3: DEFINE THE TAG TRACKING FUNCTIONALITY
function toggleLabelSelection(event) {
  var labelFor = event.target.htmlFor;
  var labelInput = document.getElementById(labelFor)


  if (!labelInput.checked) {
    selectedTags.push(labelFor);
  } else {
    selectedTags = selectedTags.filter(tag => tag !== labelFor);
  }

  //dynamically filter the recipes being shown based on the updated tag list
  showRecipes(selectedTags);
}

/***********************************************************/
/**** STEP 3: FILTER RECIPES AND GENERATE HTML ELEMENTS ****/
/***********************************************************/
function showRecipes(tags) {
  //STEP 3.1: CREATE AN ARRAY TO STORE THE RECIPES THAT MATCH THE USER'S SELECTED TAGS/FILTERS
  var selectedRecipes = []; //same pattern as selectedTags above

  //STEP 3.2: FILTER OUR ENTIRE RECIPE LIST TO ONLY THE RECIPES THAT HAVE MATCHING TAGS
  //Loop through each recipe on our data list:
  data.forEach(function (RecipeTitle) {
    //For each separate data point, see if it contains any of the tags the user has selected (accessible via the selectedTags array)
    //Loop through each tag the user has selected:
    selectedTags.forEach(function (Attribute) {
      //If a user-selected tag matches one of the tags the recipe has:
      if (recipe.Attributes.includes(Attribute)) {
        selectedRecipes.push(RecipeTitle); //add the recipe to the list of recipes to show
        return; //end the loop so that a recipe that has two matching recordings doesn't get listed twice
      }
      //NOTE: Learn more about the string includes function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    });
  });

  //STEP 3.3: SHOW THE FILTERED LIST OF RECIPES INSIDE THE RECIPECONTAINER ELEMENT (selected on line 8)
  recipeContainer.innerHTML = ""; //delete the previous recipes shown by the previous set of filters


  selectedRecipes.forEach(function(RecipeTitle) {

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
