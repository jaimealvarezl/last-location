// @flow

import React from 'react';
import EmployeeListItem from './Item';
import List from '../../UI/List';
import type { Employee } from '../../../types/Employee';

type Props = {
  employees: Array<Employee>
}

function EmployeeList(props: Props) {
  const { employees } = props;

  return (
    <List>
      {employees.map((employee) => <EmployeeListItem employee={employee} key={employee.id} />)}
    </List>
  );
}

export default EmployeeList;
