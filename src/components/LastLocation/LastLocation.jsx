// @flow

import React from 'react';
import clsx from 'clsx';
import TeamList from '../Team/List';
import MapContainer from '../UI/MapContainer';
import useLastLocation from './useLastLocation';
import EmployeeMarker from '../Employee/Marker';
import EmployeeInfoWindow from '../Employee/InfoWindow/InfoWindow';
import Toolbar from '../UI/Toolbar';
import HamburgerIcon from '../UI/Icons/Hamburger';
import styles from './last-location.module.scss';
import type { Employee } from '../../types/Employee';

function LastLocation() {
  const {
    bounds, employees, teams, handleMapClick, toggleListVisibility, listVisibility,
  } = useLastLocation();

  return (
    <>
      <Toolbar>
        <HamburgerIcon fill="white" onClick={toggleListVisibility} className={styles.icon} />
        <h1>Last Location</h1>
      </Toolbar>
      <main className={styles.container}>
        <TeamList
          teams={teams}
          className={clsx(styles.teamList, { [styles.hidden]: !listVisibility })}
        />
        <div className={styles.map}>
          <MapContainer bounds={bounds} onClick={handleMapClick}>
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
