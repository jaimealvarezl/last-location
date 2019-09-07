import React from 'react';
import { Marker } from 'google-maps-react';

function EmployeeMarker(props) {
  const { employee, ...otherProps } = props;

  const position = React.useMemo(() => {
    const [lat, lng] = employee.lastLocation.split(',')
      .map((pos) => Number.parseFloat(pos));

    return {
      lat,
      lng,
    };
  }, [employee.lastLocation]);

  return (
    <Marker name={employee.fullName} position={position} {...otherProps} />
  );
}


export default EmployeeMarker;
