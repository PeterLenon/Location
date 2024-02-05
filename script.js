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
  let point = L.marker([lat, long]).addTo(Map);
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





let cursorCoordinates = null;
Map.on('mousemove', function(event) {
    cursorCoordinates = event.latlng;
});
function getCoordinates() {
  return {
    mapLat:cursorCoordinates.lat, 
    mapLng:cursorCoordinates.lng
  }
}



// Right Click Menu
const contextMenu = document.querySelector(".right-click-wrapper");

const addLocationMenu = document.querySelector(".location-menu-wrapper");
const sightingTypeInput = document.querySelector("#location-sighting-type");
const addLocationPostButton = document.querySelector("#location-post-button");

const styledMap = document.querySelector("#map");
document.addEventListener("contextmenu", e => {
  e.preventDefault();
  let x = e.pageX, y = e.pageY;

  if (e.target == styledMap){
    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = "visible";

    const addLocationButton = document.querySelector("#right-click-location");
    addLocationButton.onclick = function () {
      addLocationMenu.style.visibility = "visible";
      contextMenu.style.visibility = "hidden";
    }
  }
  else {
    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
    contextMenu.style.visibility = "visible";


  }
})

addLocationPostButton.onclick = function () {

  addMarker(getCoordinates().mapLat, getCoordinates().mapLng, sightingTypeInput.value);
  addLocationMenu.style.visibility = "hidden";
}