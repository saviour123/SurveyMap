//JS and Leaflet Stuff

var map = L.map('map', {
	center: [5,28],
	zoom: 3,
	minZoom: 2,
	maxZoom: 18
});


L.tileLayer('http://{s}.tiles.mapbox.com/v3/ianmule.bg2v5cdi/{z}/{x}/{y}.png',{attribution: "Mapbox"}).addTo(map);

//add some GeoJson

function basementDwell(feature, layer){
	layer.bindPopup("<h1>This is Infor</h1>")
};

L.geoJson(respondents,{
	onEachFeature: basementDwell
}).addTo(map);