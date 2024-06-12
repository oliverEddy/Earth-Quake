/* global google */
import React, { useEffect, useRef } from 'react';

const Map = ({ earthquakes }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -40.9006, lng: 174.886 },
        zoom: 5,
      });

      // Add markers if there are any earthquakes
      if (earthquakes && earthquakes.length > 0) {
        earthquakes.forEach((quake) => {
          const [longitude, latitude] = quake.geometry.coordinates;
          new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            map: map,
            title: `${quake.properties.locality} - ${quake.properties.magnitude}M`,
          });
        });
      }
    }
  }, [earthquakes]);

  return <div ref={mapRef} style={{ height: '100vh', width: '100%' }} />;
};

export default Map;
