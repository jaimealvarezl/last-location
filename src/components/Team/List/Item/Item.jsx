// @flow

import React from 'react';
import EmployeeList from '../../../Employee/List';
import type { Team } from '../../../../types/Team';

type Props = {
  team: Team
}

function TeamListItem(props: Props) {
  const { team } = props;

  return (
    <li>
      <span>{team.name}</span>
      <EmployeeList employees={team.employees} />
    </li>
  );
}

export default TeamListItem;
