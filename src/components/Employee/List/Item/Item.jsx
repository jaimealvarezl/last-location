// @flow

import React from 'react';
import Avatar from '../../../Avatar';
import type { Employee } from '../../../../types/Employee';

type Props = {
  employee: Employee
}

function EmployeeListItem(props: Props) {
  const { employee } = props;

  return (
    <li>
      <Avatar>
        <img src={employee.avatarUrl} alt={employee.fullName} />
      </Avatar>
      <span>{employee.fullName}</span>
    </li>
  );
}


export default EmployeeListItem;
