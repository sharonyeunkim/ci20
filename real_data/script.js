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
var today = yyyy + "-" + mm + "-" + dd + "T" + hour + ":" + minute + ":" + seconds + "Z";
var yesterday = yyyy + "-" + mm + "-" + dd + "T00:00:00Z";
// var fromToText = `from=${yesterday}&to=${today}`;
var fromToText = "from=" + yesterday + "&to=" + today;
console.log("Today is " + today);
console.log(fromToText);
// console.log("from=2020-04-26T00:00:00Z&to=2020-04-27T00:00:00Z")
///***************************************

var a = moment(today);
var b = a.add(-24, 'hours');
console.log(a.format());
   // 2020-04-27T10:11:27-04:00

var c = moment(yesterday);
var d = c.add(-24, 'hours');
console.log(c.format());
  //2020-04-26T20:00:00-04:00
var fromToMoment = "from=" + c.format() + "&to" + a.format();
console.log(fromToMoment);
// RIGHT from=2020-04-27T00:00:00Z&to=2020-04-28T13:00:00Z
// FIX   from=2020-04-26T20:00:00-04:00&to2020-04-27T09:52:27-04:00
var xmlhttp = new XMLHttpRequest();

// var url = "https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-09T00:00:00Z&to=2020-04-10T00:00:00Z";
// var url = `https://api.covid19api.com/country/united-states/status/confirmed?${fromToText}`;
 // var url = "https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-26T00:00:00Z&to=2020-04-27T00:00:00Z";
 var url = "https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-27T00:00:00Z&to=2020-04-28T13:00:00Z";
                                                                           // from=2020-04-26T20:00:00-04:00&to2020-04-27T09:52:27-04:00
   // var url = "https://api.covid19api.com/country/united-states/status/confirmed?" + fromToText;
 // console.log(url);
// var url = "https://api.covid19api.com/country/united-states";
// var url = "https://api.covid19api.com/summary";
// var url = "https://covidtracking.com/api/us/daily";

// var data = [];

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
