


//set the map and initial coordinates
var mymap = L.map('bikemap').setView([57.3, 42.3], 1);

//set the initial tilelayer
//I've used ESRI but there are loads of others here https://leaflet-extras.github.io/leaflet-providers/preview/

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
    maxZoom: 16
});

//add the tilelayer to the map
Esri_WorldGrayCanvas.addTo(mymap);

//here is another tile system you can try
var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

//OpenTopoMap.addTo(mymap);



});
