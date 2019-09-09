// @flow

import React from 'react';
import TeamList from '../Team/List';
import MapContainer from '../UI/MapContainer';
import EmployeeMarker from '../Employee/Marker';
import useLastLocation from './useLastLocation';
import type { Employee } from '../../types/Employee';

function LastLocation() {
  const { bounds, employees, teams } = useLastLocation();

  return (
    <>
      <header>
        <h1>Last Location</h1>
      </header>
      <main style={{ display: 'flex' }}>
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
          </MapContainer>
        </div>
      </main>

    </>
  );
}

export default LastLocation;
