// @flow

import React from 'react';
import TeamListItem from './Item';
import List from '../../UI/List';
import type { Team } from '../../../types/Team';

type Props = {
  teams: Array<Team>,
  className?: string
}

function TeamList(props: Props) {
  const { teams, className } = props;

  return (
    <List className={className}>
      {teams.map((team) => <TeamListItem key={team.id} team={team} />)}
    </List>
  );
}

TeamList.defaultProps = {
  className: null,
};

export default TeamList;
