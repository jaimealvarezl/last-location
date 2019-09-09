// @flow

import React from 'react';
import EmployeeList from '../../../Employee/List';
import ListItem from '../../../UI/List/Item';
import ListItemAvatar from '../../../UI/List/Item/Avatar';
import Avatar from '../../../UI/Avatar';
import type { Team } from '../../../../types/Team';

type Props = {
  team: Team
}

function TeamListItem(props: Props) {
  const { team } = props;

  const acronym = React.useMemo<string>(() => team.name.split(' ')
    .map((word) => word[0])
    .join(''), [team.name]);

  return (
    <>
      <ListItem>
        <ListItemAvatar><Avatar>{acronym}</Avatar></ListItemAvatar>
        <span>{team.name}</span>
      </ListItem>
      <EmployeeList employees={team.employees} />
    </>
  );
}

export default TeamListItem;
