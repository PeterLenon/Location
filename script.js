function setViewPoint(mapDivId, lat, long, zoomSize) {
  var myMap = L.map(mapDivId).setView([lat, long], zoomSize);
  return myMap;
}

function addTileLayer(Map) {
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20,
    }
  ).addTo(Map);
}

function addMarker(lat, long, personInfo) {
  let point = L.marker([lat, long]).addTo(myMap);
  point.bindPopup(`<b>${personInfo}<b>`);
}

let Map = setViewPoint("map", 37.61, -122.011, 12);
addTileLayer(Map);

//this code toggles the sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
btn.onclick = function () {
  sidebar.classList.toggle("active");
};
