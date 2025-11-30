import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from "leaflet";
import { useEffect, useRef } from "react";

const defaultIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const highlightIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});



function MapInstanceSetter({ setMapInstance }) {
  const map = useMap();
  useEffect(() => {
    setMapInstance(map);
  }, [map, setMapInstance]);

  return null;
}

export default function Map({
  points,
  setMapInstance,
  setMarkers,
  setSelectedId,
  selectedId
}) {
  const markersRef = useRef({});

  useEffect(() => {
    setMarkers(markersRef.current);
  }, [setMarkers]);

  return (
    <div className="map-wrapper">
      <MapContainer
        center={[50.4501, 30.5234]}
        zoom={15}
        style={{ height: "100%", width: "100%" }}
      >
        <MapInstanceSetter setMapInstance={setMapInstance} />

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {points.map((p) => (
          <Marker
            key={p.id}
            position={[p.position.lat, p.position.lng]}
            icon={selectedId === p.id ? highlightIcon : defaultIcon}
            eventHandlers={{
              click: () => setSelectedId(p.id)
            }}
            ref={(marker) => {
              if (marker) {
                markersRef.current[p.id] = marker;
              }
            }}
          >
            <Popup>
              <b>{p.name}</b>
              <br />
              {p.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
