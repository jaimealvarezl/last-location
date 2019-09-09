// @flow

import * as React from 'react';
import LastLocation from './components/LastLocation';
import SelectedEmployeeProvider from './components/Employee/SelectedEmpoyeeProvider';
import './styles/main.scss';


function App() {
  return (
    <SelectedEmployeeProvider>
      <LastLocation />
    </SelectedEmployeeProvider>
  );
}

export default App;
