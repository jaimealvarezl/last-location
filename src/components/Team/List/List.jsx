// @flow

import React from 'react';
import TeamListItem from './Item';
import type { Team } from '../../../types/Team';

type Props = {
  teams: Array<Team>
}

function TeamList(props: Props) {
  const { teams } = props;

  return (
    <ul>
      {teams.map((team) => <TeamListItem key={team.id} team={team} />)}
    </ul>
  );
}

export default TeamList;
