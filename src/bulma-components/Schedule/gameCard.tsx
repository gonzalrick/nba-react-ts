import React, { FC } from 'react';

import { GetScheduleSchedule } from '../../generated/graphqlComponents';
import './gameCard.scss';
import { getPeriod } from '../../utils';

interface Props {
  game: GetScheduleSchedule;
}

export const GameCard: FC<Props> = ({ game }) => {
  const isActive = game.isGameActivated && game.clock;
  console.log(game);
  return (
    <div className="card my-5 py-2">
      <div className="card-content py-0">
        <div className="columns is-mobile is-vcentered">
          <div className="column">
            <figure className="image is-pulled-left">
              <img alt="team-logo" src={game.hTeam.logo!} />
            </figure>
          </div>
          <div className="column py-0">
            <div className="column py-1 is-three-fifths is-offset-one-fifth">
              <div className={`container period ${isActive ? 'active' : ''}`}>
                <h1 className="has-text-centered has-text-weight-bold is-size-5">
                  {getPeriod(game)}
                </h1>
              </div>
            </div>
            <div className="columns is-full">
              <div className="column">
                <h1 className="has-text-right is-size-2 has-text-weight-bold">
                  {game.hTeam.score}
                </h1>
              </div>
              <div className="column">
                <h1 className="has-text-left is-size-2 has-text-weight-bold">
                  {game.vTeam.score}
                </h1>
              </div>
            </div>
            <div className="columns is-full">
              <div className="column">
                <h1 className="has-text-right is-size-6">
                  {game.hTeam.fullName}
                </h1>
              </div>
              <div className="column">
                <h1 className="has-text-left is-size-6">
                  {game.vTeam.fullName}
                </h1>
              </div>
            </div>
          </div>
          <div className="column">
            <figure className="image is-pulled-right">
              <img alt="team-logo" src={game.vTeam.logo!} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
