let map;

fetch("/config")
  .then(res => res.json())
  .then(config => {

    mapboxgl.accessToken = config.mapboxToken;

    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [17.2205, 40.9959], // Polignano
      zoom: 14
    });

    return fetch("/api/places");
  })
  .then(res => res.json())
  .then(places => {
    places.forEach(p => {
      new mapboxgl.Marker()
        .setLngLat([p.lon, p.lat])
        .setPopup(new mapboxgl.Popup().setText(p.name))
        .addTo(map);
    });
  })
  .catch(err => {
    console.error("Errore inizializzazione:", err);
  });