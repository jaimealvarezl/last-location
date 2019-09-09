// @flow

import * as React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { MAP_API_KEY } from '../helpers/constants';
import type { Point } from '../types/Point';


type Props = {
  google: Object,
  children: React.Element,
  bounds?: Array<Point>
}


function BaseMap(props: Props) {
  const { google, children, bounds: boundsProps } = props;
  const [bounds, setBounds] = React.useState(null);

  React.useEffect(() => {
    setBounds(boundsProps ? new google.maps.LatLngBounds() : null);
  }, [boundsProps]);

  React.useEffect(() => {
    if (bounds) {
      boundsProps.forEach((point) => bounds.extend(point));
    }
  }, [bounds]);


  return (
    <Map google={google} bounds={bounds}>
      {children}
    </Map>
  );
}

BaseMap.defaultProps = {
  bounds: null,
};

const MapContainer = GoogleApiWrapper({ apiKey: MAP_API_KEY })(BaseMap);
export default MapContainer;
