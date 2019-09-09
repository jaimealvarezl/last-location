// @flow

import React from 'react';
import clsx from 'clsx';
import Avatar from '../../../UI/Avatar';
import ListItem from '../../../UI/List/Item';
import ListItemAvatar from '../../../UI/List/Item/Avatar';
import type { Employee } from '../../../../types/Employee';
import { SelectedEmployeeContext } from '../../SelectedEmpoyeeProvider';
import styles from './item.module.scss';

type Props = {
  employee: Employee
}

function EmployeeListItem(props: Props) {
  const { employee } = props;

  const { selectedEmployee, setSelectedEmployee } = React.useContext(SelectedEmployeeContext);

  const handleClick = React.useCallback(() => {
    setSelectedEmployee(employee);
  }, [employee, setSelectedEmployee]);

  const isSelected = selectedEmployee && selectedEmployee.id === employee.id;

  return (
    <ListItem className={clsx({ [styles.selected]: isSelected })} button onClick={handleClick}>
      <ListItemAvatar>
        <Avatar>
          <img src={employee.avatarUrl} alt={employee.fullName} />
        </Avatar>
      </ListItemAvatar>
      <span>{employee.fullName}</span>
    </ListItem>
  );
}


export default EmployeeListItem;
