import React from 'react';
import { GetGameHTeam } from '../../../generated/graphqlComponents';

interface Props {
  team: GetGameHTeam
}

export default ({ team }: Props) => (
  <tr>
    <th scope="row">
      <img className="teamIcon" alt={team.fullName || ''} src={team.logo || ''} />
    </th>
    {
      team.linescore.length > 0
        ? team.linescore.map((score, index) => <th key={index} className="value">{score}</th>)
        : <>
          <th key="h1">0</th>
          <th key="h2">0</th>
          <th key="h3">0</th>
          <th key="h4">0</th>
        </>
    }
    <th>{team.score | 0}</th>
  </tr>
);
