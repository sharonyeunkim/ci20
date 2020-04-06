console.log("javascript")
// mozilla for js resource
var host = "http://localhost:8000/load.json.html"
console.log(host)

//now need to request data from server
  //server is like harddrive to be saved
  //fetch or html.htpp calls the data
    // the url is the address to retrieve data

//fetching the variable 'host' which leads to link
    fetch(host) //currently load blocked by CORS
      .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
          });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
