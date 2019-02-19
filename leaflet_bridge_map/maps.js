// Latitude and Longitude of the longest bridges
var verrazanoNarrowsBridge = [40.6066, -74.0447];
var goldenGateBridge = [37.8199, -122.4783];
var mackinacBridge = [45.8174, -84.7278];
var georgeWashingtonBridge = [40.8517, -73.9527];
var tacomaNarrowsBridge = [47.269, -122.5517];
var geographicCenter = [39.8283, -98.5795];
// Names of longest bridges
var verrazanoNarrowsBridgeName = "Verrazano-Narrows Bridge";
var goldenGateBridgeName = "Golden Gate Bridge";
var mackinacBridgeName = "Mackinac Bridge";
var georgeWashingtonBridgeName = "George Washington Bridge";
var tacomaNarrowsBridgeName = "Tacoma Narrows Bridge";
// Spans of the longest bridges
var verrazanoNarrowsBridgeSpan = "1,298.4";
var goldenGateBridgeSpan = "1,280.2";
var mackinacBridgeSpan = "1,158.0";
var georgeWashingtonBridgeSpan = "1,067.0";
var tacomaNarrowsBridgeSpan = "853.44";

// Create the map
var map = L.map('map').setView(geographicCenter, 4);

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYW5kZTM2NzQiLCJhIjoiY2pzNWIxNGw2MDBzdjQzbWwycnJrNGZ3diJ9.Pi_anC-VpjB3HnLhzyVRzQ'
}).addTo(map)


// Add some markers
var verrazanoMarker = L.marker(verrazanoNarrowsBridge)
    .bindPopup(verrazanoNarrowsBridgeName + ', ' + verrazanoNarrowsBridgeSpan + ' meters', {
    }).addTo(map)
verrazanoMarker.openPopup();

var goldenGateMarker = L.marker(goldenGateBridge)
    .bindPopup(goldenGateBridgeName + ', ' + goldenGateBridgeSpan + ' meters', {}).addTo(map)
goldenGateMarker.openPopup();

var mackinacMarker = L.marker(mackinacBridge)
    .bindPopup(mackinacBridgeName + ', ' + mackinacBridgeSpan + ' meters', {
    }).addTo(map)
mackinacMarker.openPopup();

var georgeWashingtonMarker = L.marker(georgeWashingtonBridge)
    .bindPopup(georgeWashingtonBridgeName + ', ' + georgeWashingtonBridgeSpan + ' meters', {
    }).addTo(map)
georgeWashingtonMarker.openPopup();

var tacomaMarker = L.marker(tacomaNarrowsBridge)
    .bindPopup(tacomaNarrowsBridgeName + ', ' + tacomaNarrowsBridgeSpan + ' meters', {
    }).addTo(map)
tacomaMarker.openPopup();
