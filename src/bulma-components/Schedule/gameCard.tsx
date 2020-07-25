import React, { FC } from 'react';

import { GetScheduleSchedule } from '../../generated/graphqlComponents';
import './gameCard.scss';
import { getPeriod } from '../../utils';

interface Props {
  game: GetScheduleSchedule;
}

export const GameCard: FC<Props> = ({ game }) => {
  const isActive = game.isGameActivated && game.clock;
  return (
    <div className="card my-5 py-3">
      <div className="card-content py-0">
        <div className="columns is-mobile is-vcentered">
          <div className="column is-one-quarter-mobile">
            <figure className="image is-pulled-left">
              <img alt="team-logo" src={game.hTeam.logo!} />
            </figure>
          </div>
          <div className="column py-0">
            <div className="period column py-1 is-half is-offset-one-quarter">
              <div className={`container ${isActive ? 'active' : ''}`}>
                <h1 className="has-text-centered has-text-weight-bold is-size-5 is-size-7-touch">
                  {getPeriod(game)}
                </h1>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column is-half-mobile">
                <h1 className="has-text-right is-size-2 is-size-5-touch has-text-weight-bold">
                  {game.hTeam.score}
                </h1>
              </div>
              <div className="column is-half-mobile">
                <h1 className="has-text-left is-size-2 is-size-5-touch has-text-weight-bold">
                  {game.vTeam.score}
                </h1>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <h1 className="has-text-right is-size-6 is-hidden-touch">
                  {game.hTeam.fullName}
                </h1>
                <h1 className="has-text-right is-size-6 is-hidden-desktop">
                  {game.hTeam.triCode}
                </h1>
              </div>
              <div className="column">
                <h1 className="has-text-left is-size-6 is-hidden-touch">
                  {game.vTeam.fullName}
                </h1>
                <h1 className="has-text-left is-size-6 is-hidden-desktop">
                  {game.vTeam.triCode}
                </h1>
              </div>
            </div>
          </div>
          <div className="column is-one-quarter-mobile">
            <figure className="image is-pulled-right">
              <img alt="team-logo" src={game.vTeam.logo!} />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
