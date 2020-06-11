import React from 'react';
import {useGeoLocation} from './hook/useGeoLocation.js';

const App = () => {
  return (
    <div className="App">
      <p>Latitude: {useGeoLocation().location.latitude}</p>
      <p>Longitude: {useGeoLocation().location.longitude}</p>
    </div>
  );
}

export default App;
