// @flow

import React from 'react';
import EmployeeListItem from './Item';
import type { Employee } from '../../../types/Employee';

type Props = {
  employees: Array<Employee>
}

function EmployeeList(props: Props) {
  const { employees } = props;

  return (
    <ul>
      {employees.map((employee) => <EmployeeListItem employee={employee} key={employee.id} />)}
    </ul>
  );
}

export default EmployeeList;
