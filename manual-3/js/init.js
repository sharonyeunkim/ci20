
console.log("thisisworking")


svg1.line(20, 20, 280, 130)
  .stroke('white');

svg1.line(20, 130, 280, 20)
  .stroke('sienna')
  .strokeWidth(7)
  .strokeDasharray('7 5')

var c = svg20.circle(25, 25, 25)
  .fill('wheat');

svg20.animate = function (e) {
  var x = Math.sin(e.time) * 100 + 150;
  c.setCenter(x, 75);
};





//
// BACKUP FILE
// var svg1 = SVG(window.innerWidth, window.innerHeight);
// var svg2 = SVG(window.innerWidth, window.innerHeight);
// var svg3 = SVG(window.innerWidth, window.innerHeight);
//
// svg1.animate = function (e) {
// svg1.removeChildren();
// svg1.rect(e.time * 40, 100, 100, 100);
// }
// svg2.animate = function (e) {
// svg2.circle(500, 300, 200).fill('wheat');
// var x = Math.sin(e.time) * 100 + 150;
// c.setCenter(x, 75);
// }
