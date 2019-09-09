// @flow

import React from 'react';
import Avatar from '../../../UI/Avatar';
import ListItem from '../../../UI/List/Item';
import ListItemAvatar from '../../../UI/List/Item/Avatar';
import type { Employee } from '../../../../types/Employee';

type Props = {
  employee: Employee
}

function EmployeeListItem(props: Props) {
  const { employee } = props;

  return (
    <ListItem>
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
