import GoogleMapReact from "google-map-react";
const Map = ({ center, zoom }) => {
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCbaFaLlhQ3e5Ivbgwa_W9UK3691r-F2-g" }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
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
