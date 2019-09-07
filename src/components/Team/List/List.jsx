import React from 'react';
import TeamListItem from './Item';

function TeamList(props) {
  const { teams } = props;

  return (
    <ul>
      {teams.map((team) => <TeamListItem key={team.id} team={team} />)}
    </ul>
  );
}

export default TeamList;
