import React from 'react';
import EmployeeListItem from './Item';

function EmployeeList(props) {
  const { employees } = props;

  return (
    <ul>
      {employees.map((employee) => <EmployeeListItem employee={employee} key={employee.id} />)}
    </ul>
  );
}

export default EmployeeList;
