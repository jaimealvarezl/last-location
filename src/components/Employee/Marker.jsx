// @flow

import React from 'react';
import { Marker } from '@react-google-maps/api';
import { SelectedEmployeeMarkerContext } from './SelectedEmployeeMarkerProvider';
import type { Employee } from '../../types/Employee';

type Props = {
  employee: Employee
}

function EmployeeMarker(props: Props) {
  const { employee } = props;
  const [marker, setMarker] = React.useState(null);
  const { setSelectedMarker } = React.useContext(SelectedEmployeeMarkerContext);

  const handleClick = React.useCallback(() => {
    setSelectedMarker(employee, marker);
  }, [marker]);
  const handleLoad = React.useCallback((markerObj) => {
    setMarker(markerObj);
  }, []);


  return (
    <Marker
      onLoad={handleLoad}
      onClick={handleClick}
      position={employee.lastPosition}
    />
  );
}


export default EmployeeMarker;
