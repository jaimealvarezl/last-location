// @flow

import React from 'react';
import TeamList from '../Team/List';
import MapContainer from '../UI/MapContainer';
import useLastLocation from './useLastLocation';
import EmployeeMarker from '../Employee/Marker';
import EmployeeInfoWindow from '../Employee/InfoWindow/InfoWindow';
import styles from './last-location.module.scss';
import Toolbar from '../UI/Toolbar';
import type { Employee } from '../../types/Employee';

function LastLocation() {
  const { bounds, employees, teams } = useLastLocation();

  return (
    <>
      <Toolbar title="Last Location" />
      <main className={styles.container}>
        <TeamList teams={teams} />
        <div style={{
          flex: 1,
          position: 'relative',
          height: 'calc(100vh - 80px)',
        }}
        >
          <MapContainer bounds={bounds}>
            {employees.map((employee: Employee) => (
              <EmployeeMarker key={employee.id} employee={employee} />
            ))}
            <EmployeeInfoWindow />
          </MapContainer>
        </div>
      </main>

    </>
  );
}

export default LastLocation;
