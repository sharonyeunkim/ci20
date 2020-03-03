console.log ("thisisworking")
//function setup() runs once. unique to p5.  createCanvas as well.
// function draw() is also unique runs 60 fps
//loops and arrays are best friends. arrays used for large quantities of data
  // canvas is space for processing and p5
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (200, 80 , 0);
  console.log ("setup")
}
//keyfunctions
var a = function sd(){
  getElementById("a");
}

var b = function draw () {
  stroke (0,0,0);
  fill (0,0,0);
  circle (100, 100, 100);
}
var c = function draw () {
  stroke (0,0,0);
  fill (0,0,0);
  triangle (500, 100, 100, 0, 0 ,0);
}
var d = function draw () {
  stroke (0,0,0);
  fill (0,0,0);
  quad (1000, 200, 100, 500, 700, 50, 600, 100);
}
var e = function draw () {
  stroke (50,50,50);
  fill (10,120,120);
  ellipse (150, 200, 25, 25);
}
var f = function draw () {
  stroke (0,0,0);
  fill (30,0,0);
  rect (100, 100, 100, 100);
}
  var g = function draw () {
    stroke (0,0,0);
    fill (0,0,0);
    square (100, 100, 100, 100);
  }
  var h = function draw () {
    stroke (0,0,0);
    fill (0,0,0);
    line (500, 100, 100, 0);
  }
  var i = function draw () {
    stroke (0,0,0);
    fill (0,0,0);
    quad (500, 90, 100, 500, 60, 100, 100, 100);
  }
  var j = function draw () {
    stroke (0,0,0);
    fill (0,0,0);
    ellipse (100, 100, 100);}
  var k = function draw () {
    stroke (0,0,0);
    fill (0,0,0);
    ellipse (100, 100, 100);}


    //   function myFunction() {
    //   var element = document.getElementById("myDIV");
    //   element.classList.add("mystyle");
    // }

  var event = new Event ('keyCode');
  // .addEventListener('keyCode', function keyPressed {
document.onkeypress = function (event) { //keyPressed runs once in p5 instead of JS that happens multiple times
  if (key == "a" || key == "A") {a.call();}
  if (key == "b" || key == "B") {b.call();}
  if (key == "c" || key == "C") {c.call();}
  if (key == "d" || key == "D") {d.call();}
  if (key == "e" || key == "E") {e.call();}
  if (key == "f" || key == "F") {f.call();}
  if (key == "g" || key == "G") {g.call();}
  if (key == "h" || key == "H") {h.call();}
  if (key == "i" || key == "I") {i.call();}
  if (key == "j" || key == "J") {j.call();}
  if (key == "k" || key == "K") {k.call();}
  if (key == "l" || key == "L") {b.call();}
  if (key == "m" || key == "M") {c.call();}
  if (key == "n" || key == "N") {d.call();}
  if (key == "o" || key == "O") {e.call();}
  if (key == "p" || key == "P") {f.call();}
  if (key == "q" || key == "Q") {g.call();}
  if (key == "r" || key == "R") {h.call();}
  if (key == "s" || key == "S") {i.call();}
  if (key == "t" || key == "T") {j.call();}
  if (key == "u" || key == "U") {c.call();}
  if (key == "v" || key == "V") {d.call();}
  if (key == "w" || key == "W") {e.call();}
  if (key == "x" || key == "X") {f.call();}
  if (key == "y" || key == "Y") {g.call();}
  if (key == "z" || key == "Z") {h.call();}
  if (key == " " ) {i.call();}
  if (key == "<br>" ) {j.call();}
console.log ("pressed")
    }








  // function draw () {
  // background (240, 240, 240);
  // fill (255, 255, 255)
  // ellipse (200, 200, 50, 50);
  // console.log ("im e + circle!")

// function draw () {
//   fill(200);
// }

// function keyPressed() { //keyPressed runs once in p5 instead of JS that happens multiple times
//   if (keyCode == 69 || keyCode == 69 || keyCode == 69) {
//     ellipse(mouseX, mouseY, 50, 50);
//   }
//
// }
