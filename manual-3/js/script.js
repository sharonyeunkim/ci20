console.log ("here")
// red are objects, blue are functions attached to object




//LOOKING FOR LETTERS= inside getElement "()" specifes string= looking for LETTERS ="a"
var aElement = document.getElementById("a"); //not get querySelector
console.log(aElement);




//"I'm looking for letters.Listening.Animationend.Dothisfunction"
aElement.addEventListener("animationend", function () {
  aElement.classList.remove("active");
  console.log(aElement.style.webkitAnimationPlayState) //not sure if this line is needed
}) // (what event listening for (green-"animationend"), function type(); )




// CANVAS TO DRAW FUNCTIONS
function setup() {
  createCanvas(windowWidth, windowHeight);
  // background (200, 80 , 0);
  console.log ("setup")
}


// function triggerTwoLetters() {
//   var ii = document.querySelectorAll("#i, #ii");
//
//   ii.classList.remove("active");
//   void element.offsetWidth;
//   element.classList.add("active");
//   audio.play();
//   console.log("ii is working");
//
// }

// function to change body colors
var spacebarcounter = 0
function spacebar() {
    if (spacebarcounter % 4 == 0) {
      background (253, 249 , 218);
    } else if (spacebarcounter % 4 == 1) {
      background (229, 217, 227);
    } else if (spacebarcounter % 4 == 2) {
      background (202, 208, 214);
    } else if (spacebarcounter % 4 == 3) {
      background (214, 226, 211);
    }
    spacebarcounter++
}


//Getting ID and CLASS to trigger.
function triggerLetter(letter) {
  var element = document.querySelector("#" + letter );
  // var audio = document.querySelector("." + letter);

  element.classList.remove("active");         // auto removes "active" class aka animation after it plays
  void element.offsetWidth; //RESETS ANIMATION to beginning position
  element.classList.add("active"); // reloads animation information
  audio.play();
  console.log("i'm " + letter);
}


document.addEventListener("keypress", function(event){
  var keyCode = event.which; //event.which is thing for space on keycode spacebar bc doesn't have keyCode
  // var eventKey = event.key;
  if (keyCode == 32 ) spacebar(); //put before triggerLetter so it doesn't break spacebar
  // if (eventKey == 73 ) triggerTwoLetters();
  if(event.key) triggerLetter(event.key.toLowerCase()); //deals with keys aka keyCodes, not event.which
              //toLowerCase auto changes capital letters to lower. No need to state capitol "A, B, etc."
});
