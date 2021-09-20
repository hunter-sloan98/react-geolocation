//*Display Component(child of both Geo & Weather)
import React from 'react';
import GeoLocation from './GeoLocation';
import WeatherAPI from './WeatherAPI';

const FetchDisplay = () => {
  return(
    <div>
      <GeoLocation />
    </div>
  )
}

export default GeoLocation;