let myMap = L.map("map").setView([37.61, -122.011], 12);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);

function setViewPoint(mapDivId, lat, long, zoomSize) {
    var myMap = L.map(mapDivId).setView([lat, long], zoomSize);
}

function addTileLayer(){
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(myMap);
}

function addMarker(lat, long, personInfo){
    let point = L.marker([lat, long]).addTo(myMap);
    point.bindPopup(`<b>${personInfo}<b>`);

}