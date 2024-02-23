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




function databasePostPoint(sightingType, sightingCoordinatesX, sightingCoordinatesY, sightingUser) {
  const postData = {
    "sightingType": sightingType,
    "sightingCoordinatesX": sightingCoordinatesX,
    "sightingCoordinatesY": sightingCoordinatesY,
    "sightingUser": sightingUser
  };
    
  fetch('http://localhost:3000/locations', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received from server:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}




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


const sighting_dropdown = document.querySelector(".location-sighting-dropdown-wrapper");
const sighting_list = document.querySelector(".location-sighting-list");
const sighting_selected = document.querySelector(".location-sighting-selected");

sighting_dropdown.addEventListener("click", ()=>{
  sighting_list.classList.toggle('location-sighting-show');
})

sighting_list.addEventListener("click", (e)=>{
  const text = e.target.querySelector(".location-sighting-text");

  sighting_selected.innerHTML = text.innerHTML;
})

// Right Click Menu
const contextMenu = document.querySelector(".right-click-wrapper");

const addLocationMenu = document.querySelector(".location-menu-wrapper");
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

  addMarker(getCoordinates().mapLat, getCoordinates().mapLng, sighting_selected.innerHTML);
  addLocationMenu.style.visibility = "hidden";

  databasePostPoint(sighting_selected.innerHTML, getCoordinates().mapLat, getCoordinates().mapLng, "USER")
}








// Plot locations on map when it loads
fetch('http://localhost:3000/locations')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  for (const obj of data) {
    console.log(obj);
    addMarker(obj.sightingCoordinatesX, obj.sightingCoordinatesY, obj.sightingType);
  }
  
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});