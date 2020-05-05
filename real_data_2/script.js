console.log("working");

// read the JSON file (or, get the live data from NYT)
// today = yyyy + "-" + mm + "-" + dd + "T:" + hour + ":" + minute + ":" + seconds + "Z";
// var yesterday = yyyy + "-" + mm + "-" + dd + "T:00:00:00Z";  var yesterday = `${yyyy}-${mm}-${dd}T:00:00:00Z`; 

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //getMonth() is 0 based
var yyyy = today.getFullYear();
var hour = today.getHours();
var minute = today.getMinutes();
var seconds = today.getSeconds();
if(dd < 10) {
    dd = '0' + dd;
}
if(mm < 10) {
    mm = '0' + mm;
}
if(seconds < 10) {
    seconds = '0' + seconds;
};
console.log(seconds);
// var today = yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minute + ":" + seconds + "Z";
var today = yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minute + ":" + seconds;

// var yesterday = yyyy + "-" + mm + "-" + dd + "T00:00:00Z";
var yesterday = yyyy + mm + dd;
console.log("yesterday is " + yesterday);

// var fromToText = `from=${yesterday}&to=${today}`;
var fromToText = "from=" + yesterday + "&to=" + today;
console.log("Today is " + today);
console.log(fromToText);
// console.log("from=2020-04-26T00:00:00Z&to=2020-04-27T00:00:00Z")
///***************************************
var a = moment(today);
  a.utc("");
  var b = a.add(-24, 'hours');
  console.log(a.format());

var c = moment(yesterday);
  c.utc("");
  var d = c.add(-24, 'hours');
  console.log(c.format());

var fromToMoment = "from=" + c.format() + "&to=" + a.format();
  console.log(fromToMoment);

//*******************************************
var xmlhttp = new XMLHttpRequest();
 var url = "https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-29T00:00:00Z&to=2020-04-29T16:22:55Z";
 // var url = "https://api.covid19api.com/country/united-states/status/confirmed?" + fromToMoment;
  //the log... https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-29T04:00:00Z&to=2020-04-29T16:22:55Z
 console.log(url);


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    var city = data[0].City;
    console.log(city);
    var cityCode = data[0].CityCode;
    console.log(cityCode);
    var div = document.createElement("div");
    var h1 = document.createElement("h1");
      h1.innerHTML = city + "'s" + " Fips Code";
    var p = document.createElement("p");
      p.innerHTML = cityCode;
    // div.appendChild(h1);
    document.getElementById('result').appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
   }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
//arc method/ lines... methods + fills + strokesfor style
