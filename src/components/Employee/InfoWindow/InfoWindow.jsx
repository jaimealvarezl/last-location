// @flow
import * as React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { SelectedEmployeeMarkerContext } from '../SelectedEmployeeMarkerProvider';
import EmployeeInfoWindowData from './Data';


function EmployeeInfoWindow() {
  const {
    selectedEmployee, setSelectedMarker, marker,
  } = React.useContext(SelectedEmployeeMarkerContext);


  const handleClose = React.useCallback(() => {
    setSelectedMarker(null, null);
  }, []);

  if (!selectedEmployee) {
    return null;
  }

  return (
    <InfoWindow
      onCloseClick={handleClose}
      position={selectedEmployee.lastPosition}
      anchor={marker}
    >
      <EmployeeInfoWindowData employee={selectedEmployee} />
    </InfoWindow>
  );
}


export default EmployeeInfoWindow;
