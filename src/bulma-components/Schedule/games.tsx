import React, { FC } from 'react';
import { GameCard } from './gameCard';

import { GetScheduleSchedule } from '../../generated/graphqlComponents';

interface Props {
  games: GetScheduleSchedule[];
}

export const Games: FC<Props> = ({ games }) => {
  return (
    <div>
      {games.map((game, index) => (
        <GameCard key={index} game={game} />
      ))}
    </div>
  );
};
