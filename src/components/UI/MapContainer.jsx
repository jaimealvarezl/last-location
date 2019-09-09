// @flow

import * as React from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';
import { MAP_API_KEY } from '../../helpers/constants';
import type { Point } from '../../types/Point';


type Props = {
  google: Object,
  children: React.Element,
  bounds?: Array<Point>
}


function BaseMap(props: Props) {
  const { google, children, bounds: boundsProps } = props;
  const [mapRef, setMapRef] = React.useState(null);
  const [bounds, setBounds] = React.useState(null);

  const handleLoad = React.useCallback((map) => {
    setMapRef(map);
  }, []);

  React.useEffect(() => {
    console.log(google);
    if (boundsProps && boundsProps.length > 0) {
      const newBounds = bounds || new google.maps.LatLngBounds();
      boundsProps.forEach((point) => newBounds.extend(point));
      if (!bounds) {
        setBounds(newBounds);
      }
    } else {
      setBounds(null);
    }
  }, [boundsProps]);

  console.log({ mapRef });

  return (
    <Map google={google} bounds={bounds} onLoad={handleLoad}>
      {children}
    </Map>
  );
}

BaseMap.defaultProps = {
  bounds: null,
};

const MapContainer = GoogleApiWrapper({ apiKey: MAP_API_KEY })(BaseMap);
export default MapContainer;
