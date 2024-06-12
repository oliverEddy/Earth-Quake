// src/components/LeafletMap.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Import the default marker icon images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default icon paths being incorrect
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const LeafletMap = ({ earthquakes }) => {
  return (
    <MapContainer center={[-40.9006, 174.886]} zoom={5} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {earthquakes && earthquakes.length > 0 && earthquakes.map((quake) => {
        const [longitude, latitude] = quake.geometry.coordinates;
        return (
          <Marker key={quake.properties.publicID} position={[latitude, longitude]}>
            <Popup>
              {quake.properties.locality} - {quake.properties.magnitude}M at {new Date(quake.properties.time).toLocaleString()}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default LeafletMap;
