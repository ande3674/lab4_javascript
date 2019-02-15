// Array with latitude and longitude
var metroAreaCenterCoordinates = [44.96, -93.2]

// Create the map
var map = L.map('mctc-map').setView(metroAreaCenterCoordinates, 9)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5kZTM2NzQiLCJhIjoiY2pzNWIxNGw2MDBzdjQzbWwycnJrNGZ3diJ9.Pi_anC-VpjB3HnLhzyVRzQ'
}).addTo(map)


// Add some markers
var mctcCoordinates = [44.9724, -93.2844]
var mctcMarker = L.marker(mctcCoordinates)
    .bindPopup("Minnepolis College<br><a href='https://minneapolis.edu'>Website</a>")
    .addTo(map)


var stPaulCoordinates = [44.94839, -93.1099]
var stpMarker = L.marker(stPaulCoordinates)
    .bindPopup("Saint Paul College<br><a href='https://saintpaul.edu'>Website</a>")
    .addTo(map)

var normandaleCoordinates = [44.8297, -93.3312]
var stpMarker = L.marker(normandaleCoordinates)
    .bindPopup("Normandale College<br><a href='http://www.normandale.edu/'>Website</a>")
    .addTo(map)


// Add a circle
var metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000,
    fillOpacity: 0.2
})
    .bindPopup("Twin Cities Metro Area")
    .addTo(map)

// var polygon = L.polygon([
//     [44.509, -93.95],
//     [44.86, -93.69],
//     [44.78, -93.9]
// ]).addTo(map);
// polygon.bindPopup("Triangle!")

