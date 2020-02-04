// get all of the divs that have a class name "step"
document.querySelectorAll(".step").forEach(function(step) {
  // make an event handler. this happens on press
  step.onclick = function () {
    // get an array (list) of all the children of this div
    Array.from(step.childNodes)
      // "filter" get only the <p> elements
      .filter(function(el) { return el.tagName === "P"; })
      // for every <p> element, do the thing below
      .forEach(function(p) {
        // if the p is displayed make it hidden and visa versa

        if (p.style.display === "block") {
          p.style.display = "none";
        } else {
          p.style.display = "block";
        }

      });
  }
})
