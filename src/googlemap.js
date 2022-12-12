import { React, useMemo } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const center = useMemo(() => ({ lat: 28.45098, lng: -81.4806 }), []);

  const onLoad = (load) => {
    console.log("on ", load);
  };

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={15}
      options={options}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker onLoad={onLoad} position={{ center }} />
    </GoogleMap>
  );
};

export default Map;
