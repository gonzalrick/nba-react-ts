import React from 'react';
import { getTeamIconUrl } from '../../../utils';

export default ({ team }: any) => (
  <tr>
    <th scope="row">
      <img className="teamIcon" src={getTeamIconUrl(team.name)} />
    </th>
    {
      team.linescore.length > 0
        ? team.linescore.map((score: any) => <th className="value">{score.score}</th>)
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
