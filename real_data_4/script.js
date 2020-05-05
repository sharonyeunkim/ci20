console.log("working");

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
  c.hours("00")
  var d = c.add(-24, 'hours');
  console.log(c.format());

var fromToMoment = "from=" + c.format() + "&to=" + a.format();
  console.log(fromToMoment);

//*******************************************
var xmlhttp = new XMLHttpRequest();
 // var url = "https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-30T00:00:00Z&to=2020-04-30T21:35:11Z";
        // https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-30T04:00:00Z&to=2020-04-30T21:35:11Z
 var url = "https://api.covid19api.com/country/united-states/status/confirmed?" + fromToMoment;
  //the log... https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-29T04:00:00Z&to=2020-04-29T16:22:55Z
 console.log(url);
 console.log(fromToMoment);


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


//*******************************************************
//*******************************************************
//*******************************************************
var mapimg;
var clat = 0;
var clon = 0;
//31.2304° N, 121.4737° E
//Lat: "40.59" Lon: "-102.36"
var lat = 40.59;
var lon = -102.36;

var zoom = 1;
var virus;


function preload() {
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1Ijoic2hhcm9ueWV1bmtpbSIsImEiOiJjazluYXM1dGowMGQ2M2dxcnd6MzJ0MmVkIn0.LxQnR30wG7XeNoMOUFtVfw');
  // virus = loadStrings('https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-29T00:00:00Z&to=2020-04-29T16:22:55Z');
  virus = loadStrings('https://api.covid19api.com/country/united-states/status/confirmed?' + fromToMoment)
}

function mercX(lon){
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat){
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan (PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}

function setup() {
  createCanvas(1024, 512);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  // for (var i = 0; i < virus.length; i++) {
  //   var data = virus[i].split(/},/);
  //   console.log(data);

    for (var i = 0; i < data.length; i = i + 1){
      var lat = data[i].Lat;
      var lon = data[i].Lon;
      var x = mercX(lon) - cx;
      var y = mercY(lat) - cy;

      fill(255, 0, 255, 200);
      ellipse(x, y, 8, 8);
    }

  }



function draw() {

}
