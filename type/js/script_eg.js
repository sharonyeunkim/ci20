console.log("hello")

document.addEventListener("keypress", function(event) {
  var keyCode = event.code;
  var audioFile = "../audio/" + keyCode + ".mp3";
  var audio = new Audio(audioFile);
  audio.play();

  console.log(document.getElementById(keyCode));
});
  // above 3 lines of code same for animation trigger

//TWEEN Javascript Libary

//swtich statements
