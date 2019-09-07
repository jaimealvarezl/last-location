import React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { MAP_API_KEY } from '../helpers/constants';


function MapContainer(props) {
  const { google, children, style } = props;
  return (
    <Map google={google} style={style}>
      {children}
    </Map>
  );
}


export default GoogleApiWrapper({ apiKey: MAP_API_KEY })(MapContainer);
