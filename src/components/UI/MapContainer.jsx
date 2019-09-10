// @flow

import * as React from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import { MAP_API_KEY } from '../../helpers/constants';
import type { Point } from '../../types/Point';


type Props = {
  children: React.Element,
  bounds?: Array<Point>,
  maxBoundZoom?: number,
  onClick?: Function
}


function MapContainer(props: Props) {
  const {
    children, bounds: boundsProps, maxBoundZoom, onClick,
  } = props;
  const [mapRef, setMapRef] = React.useState(null);
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: MAP_API_KEY });

  const handleLoad = React.useCallback((map) => {
    setMapRef(map);
  }, []);

  React.useEffect(() => {
    if (mapRef && boundsProps && boundsProps.length > 0) {
      // eslint-disable-next-line no-undef
      const bounds = new window.google.maps.LatLngBounds();
      boundsProps.forEach((point) => bounds.extend(point));
      mapRef.fitBounds(bounds);
      const zoom = mapRef.getZoom();

      if (zoom > maxBoundZoom) mapRef.setZoom(maxBoundZoom);
    }
  }, [boundsProps, mapRef, maxBoundZoom]);

  if (!isLoaded) {
    return <div>Spinner</div>;
  }
  if (loadError) {
    return <span>{`Map cannot be loaded ${loadError}`}</span>;
  }
  return (
    <GoogleMap
      onClick={onClick}
      onLoad={handleLoad}
      mapContainerStyle={{
        height: '100%',
        width: '100%',
      }}
      options={{
        mapTypeControlOptions: {
          mapTypeIds: [],
        },
        streetViewControl: false,
      }}
    >
      {children}
    </GoogleMap>
  );
}

MapContainer.defaultProps = {
  bounds: null,
  maxBoundZoom: 15,
  onClick: null,
};

export default MapContainer;
