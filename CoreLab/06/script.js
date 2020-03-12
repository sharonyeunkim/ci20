var div01 = document.createElement('div');
div01.className = 'sidebar';
document.getElementsByTagName('body')[0].appendChild(div01);

var div02 = document.createElement('div');
div02.className = 'sidebar';
document.getElementsByTagName('body')[0].appendChild(div02);


var pages = ["home", "writings", "drawings", "sketchbook",
"prints", "travel", "organizations", "contact", "links"];


//string concationation

//TEMPLATE LITERALS `` template for rest of elements


var sidebar = document.querySelector(".sidebar");


//need loops to re-add more array names

for (let i =0; i < pages.length; i++) {
  console.log(pages[i]);
  var link = `<a href ="${pages[i]}.html" class="sidebar-link"> ${pages[i]}</a>`;
  sidebar.innerHTML += link; //because link equals the other things
}


// var greeting ="hello";
//     greeting   += "goodbye";
        // += takes last element, adds the new
        //  "hellogoodbye" so this applies tot he class links
