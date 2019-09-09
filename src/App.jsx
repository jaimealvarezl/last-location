// @flow

import * as React from 'react';
import LastLocation from './components/LastLocation';
import SelectedEmployeeProvider from './components/Employee/SelectedEmpoyeeProvider';
import './styles/main.scss';
import SelectedEmployeeMarkerProvider from './components/Employee/SelectedEmployeeMarkerProvider';


function App() {
  return (
    <SelectedEmployeeProvider>
      <SelectedEmployeeMarkerProvider>
        <LastLocation />
      </SelectedEmployeeMarkerProvider>
    </SelectedEmployeeProvider>
  );
}

export default App;
