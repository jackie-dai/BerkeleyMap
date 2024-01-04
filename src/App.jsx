
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 37.8717, // default latitude
  lng: -122.2595, // default longitude
};

const App = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBheKlPJMvxl9vojqKuLSGFZoqjsVaDd2c',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16.5}
        center={center}
      > 
        <Marker 
          title="HellO!"
          position={center} 
        />
      </GoogleMap>
    </div>
  );
};

export default App;