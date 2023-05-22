import React, { useEffect, useState, useRef } from 'react';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import { csv } from 'd3-fetch';
import map from '../assets/map.csv';
import { createRoot } from 'react-dom/client';

export function MapGenerate({ containerId }) {
  // Define the color scale
  const pal = scaleOrdinal(schemeCategory10)
    .domain(['production', 'find']);

  // Define state to hold the map data
  const [data, setData] = useState([]);

  // Use a ref to store a reference to the root
  const rootRef = useRef(null);

  useEffect(() => {
    // Load the data
    csv(map, (d) => {
      return {
          name: d.location,
          latitude: d.latitude ? +d.latitude.replace(',', '.') : 0,
          longitude: d.longitude ? +d.longitude.replace(',', '.') : 0,
          place_of: d.place_of,
        };
    }).then((data) => {
      // Store the data in state
      setData(data);
    });
  }, []);

  // Define the markers
  function Marker({ latitude, longitude, place_of, name }) {
    const map = useMap();
    map.flyTo([latitude, longitude], 9);
    return (
      <CircleMarker
        center={[latitude, longitude]}
        radius={place_of === 'production' ? 6 : 7}
        fillColor={pal(place_of)}
        stroke={false}
        fillOpacity={0.9}
      >
        <Popup>{name}</Popup>
      </CircleMarker>
    );
  }

  // Render the MapContainer component inside the specified container
  useEffect(() => {
    if (containerId) {
      // If the root doesn't exist yet, create it
      if (!rootRef.current) {
        rootRef.current = createRoot(document.getElementById(containerId));
      }

      // Render the component tree into the root
      rootRef.current.render(
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data.map((d, i) => (
            <Marker key={i} {...d} />
          ))}
        </MapContainer>
      );
    }
  }, [containerId, data]);

  // Return null since the MapContainer component is being rendered using createRoot
  return null;
}