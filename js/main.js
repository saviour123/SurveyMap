//JS and Leaflet Stuff
//creating the map with div
var map = L.map('map', {
	center: [5,28],
	zoom: 3,
	minZoom: 2,
	maxZoom: 18
});

//add tiles
L.tileLayer('http://{s}.tiles.mapbox.com/v3/ianmule.bg2v5cdi/{z}/{x}/{y}.png',{attribution: "Mapbox"}).addTo(map);


//create map icon
var marker = new L.Icon({
	iconUrl: 'img/marker.png',
	iconSize: [38, 95],
	iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});

//the function that binds the icon to the layer
function myIcon(feature, layer) {
	layer.setIcon(marker);
};

L.geoJson(fielddata,{
	onEachFeature: myIcon
}).addTo(map);




