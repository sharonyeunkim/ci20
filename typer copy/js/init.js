$(document).ready(function() {
 var entryCount = 0;
 var displayCount = 0;
 var word = "";
  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    // event.preventDefault();

    //translate unicode to characters
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
  });

 //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      word = word.slice(0, word.length - 1);
    if (displayCount < 0) {
        displayCount = 0;
      }
    if (e.keyCode == 13) {
      // reset program
      word = "";
    }
    if (e.key == " ") {
      word = "";
    }
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});

function createElement(k) {
  //i do something here
 var elem = $('#cursor');
  if (k == "a" || k == "A") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/smGpsxCQzXwDS/giphy.gif"></span>'); }
  if (k == "b" || k == "B") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/uDj0Fa3q8ipBS/giphy.gif"</span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/WW7vnXiXTuGhq/giphy.gif"</span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif"</span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/5ev3alRsskWA0/giphy.gif"</span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/l3mZ4WW4JN2XraEXm/giphy.gif"</span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/5NPhdqmyRxn8I/giphy.gif"</span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/26BGFJ4c5v2dhlYdy/giphy.gif"</span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/2tSodgDfwCjIMCBY8h/giphy.gif"</span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/26xBGd4ho9zZptWbC/giphy.gif"</span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/NrJfxog6gwsCs/giphy.gif"</span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/5oRI3qja23Q2I/giphy.gif"</span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif"</span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner"><img src="https://media.giphy.com/media/ekj1CCbXpgDP3NaMTJ/giphy.gif"</span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>'); }
}

function deleteElement() {
  $(".inner").last().remove();
}
