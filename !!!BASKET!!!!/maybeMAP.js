// Load the required libraries
import { colorFactor } from 'd3-color';
import { csv } from 'd3-fetch';
import { render } from 'react-dom';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';

// Define the color scale
const pal = colorFactor(['red', 'navy'], ['production', 'find']);

// Load the data
csv('https://raw.githubusercontent.com/Dekromatia/TRY1/main/map.csv', (d) => {
  const location = d.location;
  const latitude = +d.latitude;
  const longitude = +d.longitude;
  const place_of = d.place_of;

  // Define the markers
  const Marker = () => {
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
        <Popup>{location}</Popup>
      </CircleMarker>
    );
  };

  // Render the map
  render(
    <MapContainer center={[51.505, -0.09]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker />
    </MapContainer>,
    document.getElementById('root')
  );
});