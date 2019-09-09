// @flow
import * as React from 'react';
import { InfoWindow } from 'google-maps-react';
import type { Employee } from '../../types/Employee';

type Props = { employee: Employee }

function EmployeeInfoWindow(props: Props) {
  return <InfoWindow />;
}


export default EmployeeInfoWindow;
