// @flow

import React from 'react';
import { Marker } from 'google-maps-react';
import type { Employee } from '../../types/Employee';

type Props = {
  employee: Employee,
  google?: Object,
  map?: Object,
  mapCenter?: Object
}

function EmployeeMarker(props: Props) {
  const {
    employee, google, map, mapCenter,
  } = props;

  const position = React.useMemo(() => {
    const [lat, lng] = employee.lastLocation.split(',')
      .map((pos) => Number.parseFloat(pos));

    return {
      lat,
      lng,
    };
  }, [employee.lastLocation]);

  return (
    <Marker
      name={employee.fullName}
      position={position}
      google={google}
      map={map}
      mapCenter={mapCenter}
    />
  );
}

EmployeeMarker.defaultProps = {
  google: null,
  map: null,
  mapCenter: null,
};


export default EmployeeMarker;
