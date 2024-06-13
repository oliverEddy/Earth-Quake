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

const LeafletMap = ({ hoveredQuake }) => {
  return (
    <MapContainer center={[-40.9006, 172.886]} zoom={6} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {hoveredQuake && (
        <Marker 
          position={[
            hoveredQuake.geometry.coordinates[1],
            hoveredQuake.geometry.coordinates[0]
          ]}
        >
          <Popup>
            {hoveredQuake.properties.locality} - {hoveredQuake.properties.magnitude}M at {new Date(hoveredQuake.properties.time).toLocaleString()}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default LeafletMap;
