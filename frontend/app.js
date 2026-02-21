let map;

// Prima prendiamo il token Mapbox dal backend
fetch("/config")
  .then(res => res.json())
  .then(config => {

    mapboxgl.accessToken = config.mapboxToken;

    // Inizializzazione mappa centrata su Polignano a Mare
    map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [17.2205, 40.9959], // Polignano
      zoom: 14
    });

    // Hardcoded 6 luoghi principali
    const places = [
      { name: "Abbazia di San Vito", lat: 40.9917, lon: 17.2210 },
      { name: "Statua di San Vito", lat: 40.9925, lon: 17.2208 },
      { name: "Statua di Domenico Modugno", lat: 40.9951, lon: 17.2194 },
      { name: "Lama Monachile", lat: 40.9959, lon: 17.2205 },
      { name: "Arco Marchesale", lat: 40.9943, lon: 17.2199 },
      { name: "Scoglio dell'Eremita", lat: 40.9981, lon: 17.2217 }
    ];

    // Aggiungo marker sulla mappa
    places.forEach(p => {
      new mapboxgl.Marker({ color: "red" })
        .setLngLat([p.lon, p.lat])
        .setPopup(new mapboxgl.Popup().setText(p.name))
        .addTo(map);
    });

  })
  .catch(err => {
    console.error("Errore inizializzazione mappa:", err);
  });