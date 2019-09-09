// @flow

import React from 'react';
import TeamListItem from './Item';
import List from '../../UI/List';
import type { Team } from '../../../types/Team';

type Props = {
  teams: Array<Team>
}

function TeamList(props: Props) {
  const { teams } = props;

  return (
    <List>
      {teams.map((team) => <TeamListItem key={team.id} team={team} />)}
    </List>
  );
}

export default TeamList;
