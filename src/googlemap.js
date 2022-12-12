import { React, useMemo } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";

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
      <MarkerF
        onLoad={onLoad}
        name="pin"
        position={{ lat: 28.45098, lng: -81.4806 }}
      />
    </GoogleMap>
  );
};

export default Map;
