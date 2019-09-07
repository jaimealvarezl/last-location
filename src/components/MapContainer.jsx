// @flow

import * as React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { MAP_API_KEY } from '../helpers/constants';


type Props = {
  google: Object,
  children: React.Element
}


function BaseMap(props: Props) {
  const { google, children } = props;
  return (
    <Map google={google}>
      {children}
    </Map>
  );
}

const MapContainer = GoogleApiWrapper({ apiKey: MAP_API_KEY })(BaseMap);
export default MapContainer;
