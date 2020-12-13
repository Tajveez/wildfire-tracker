import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
const Map = ({ eventData, center, zoom }) => {
  // console.log(center.lat, center.lng);
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCbaFaLlhQ3e5Ivbgwa_W9UK3691r-F2-g" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 33.6844,
    lng: 73.0479,
  },
  zoom: 6,
};

export default Map;
