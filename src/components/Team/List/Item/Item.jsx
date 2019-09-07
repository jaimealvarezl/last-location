import React from 'react';
import EmployeeList from '../../../Employee/List';

function TeamListItem(props) {
  const { team } = props;

  return (
    <li>
      <span>{team.name}</span>
      <EmployeeList employees={team.employees} />
    </li>
  );
}

export default TeamListItem;
