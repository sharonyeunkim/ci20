//create variable to store content inside div //
var div01 = document.createElement('div');
//this defined div is inserted into class//
div01.className = 'sidebar';
//retrieve attribute of html- body, and insert the div01 to connect the div to html//
document.getElementsByTagName('body')[0].appendChild(div01);

//create another variable to store content inside div //
var div02 = document.createElement('div');
//name this div within a class to organize//
div02.className = 'sidebar';
//retrieve attribute of html- body, and insert the div02//
document.getElementsByTagName('body')[0].appendChild(div02);


//create array of items inside variable named "pages"//
var pages = ["home", "writings", "drawings", "sketchbook",
"prints", "travel", "organizations", "contact", "links"];


//string concationation

//TEMPLATE LITERALS `` template for rest of elements

//define variable sidebar as the classname sidebar-definied in line 11//
var sidebar = document.querySelector(".sidebar");


//need loops to re-add more array names
//make "i" = 0 at first. If it's less than the total amount of items in the
//     pages array, add "1" item to it//
for (let i =0; i < pages.length; i++) {
//console log to see if the 'i' is definied as the new page number//
  console.log(pages[i]);
//create a new variable named 'link'. inside create an (a) tag which linkes to the
//  pages array with the definied item (i), added ".html" to the end with the class
//     definied as "sidebar-link". It is named as the definied item of the page array
//         and closed with </a>//
  var link = `<a href ="${pages[i]}.html" class="sidebar-link"> ${pages[i]}</a>`;
//final step. take the variable 'sidebar' and add .html to end. the + to the other
//   items in the array//
  sidebar.innerHTML += link; //because link equals the other things
}


// var greeting ="hello";
//     greeting   += "goodbye";
        // += takes last element, adds the new
        //  "hellogoodbye" so this applies tot he class links
