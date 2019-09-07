import React from 'react';
import Avatar from '../../../Avatar';

function EmployeeListItem(props) {
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
