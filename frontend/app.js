mapboxgl.accessToken = "sk.eyJ1IjoicG9saWduYW5vZ28iLCJhIjoiY21sdzBuMmpsMGN5czNscXNwYWt2M2FmZiJ9._QTnlfiDIDacYcJXXFOG2w";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [17.2205, 40.9959],
  zoom: 14
});

fetch("/config")
  .then(res => res.json())
  .then(config => {
    mapboxgl.accessToken = config.mapboxToken;
    // inizializza mappa qui
  });

fetch("/api/places")
  .then(res => res.json())
  .then(places => {
    places.forEach(p => {
      new mapboxgl.Marker()
        .setLngLat([p.lon, p.lat])
        .setPopup(new mapboxgl.Popup().setText(p.name))
        .addTo(map);
    });
  });