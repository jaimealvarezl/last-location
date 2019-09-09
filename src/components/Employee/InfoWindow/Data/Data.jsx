// @flow
import * as React from 'react';
import Avatar from '../../../UI/Avatar';
import styles from './data.module.scss';
import type { Employee } from '../../../../types/Employee';


type Props = {
  employee: Employee
}

function EmployeeInfoWindowData(props: Props) {
  const { employee } = props;

  return (
    <div className={styles.container}>
      <Avatar src={employee.avatarUrl} alt={employee.fullName} />
      <div className={styles.info}>
        <strong>{employee.fullName}</strong>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={`https://www.google.com/maps/search/?api=1&query=${employee.lastPosition.lat},${employee.lastPosition.lng}`}
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
}

export default EmployeeInfoWindowData;
