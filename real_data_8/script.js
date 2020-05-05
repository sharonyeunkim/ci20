console.log(" newworking");

//*******************************************************
//*******************************************************
//*******************************************************
var mapimg;

var clat = 0;
var clon = 0;

var lat = 31.2304;
var lon = 121.4737;

var zoom = 1;
var earthquakes;

function preload() {                                                        //37.0902° N, 95.7129° W   1024x512
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1Ijoic2hhcm9ueWV1bmtpbSIsImEiOiJjazluYXM1dGowMGQ2M2dxcnd6MzJ0MmVkIn0.LxQnR30wG7XeNoMOUFtVfw');
  // virus = loadStrings('https://api.covid19api.com/country/united-states/status/confirmed?from=2020-04-29T00:00:00Z&to=2020-04-29T16:22:55Z');
  earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
  console.log(earthquakes);
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
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

  for (var i = 0; i < earthquakes.length; i++) {
    var data = earthquakes[i].split(/,/);

    var lat = data[1];
    var lon = data[2];
    var mag = data[4];

    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    mag = pow(10, mag);
    mag = sqrt(mag);

    var magmax = sqrt(pow(10, 10));

    var d = map(mag, 0, magmax, 0, 180);
    stroke(255, 0, 255);
    fill(255, 0, 255, 200);
    ellipse(x, y, d, d);
  }
}
