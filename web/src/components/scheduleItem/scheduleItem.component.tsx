import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from '@reach/router';

import TeamItem from '../teamItem/teamItem.component';
import { getPeriod } from '../../utils';

import './scheduleItem.component.scss';
export class ScheduleItem extends Component<any> {
  render() {
    const game: any = this.props.game;
    return (
      <Col className="scheduleItem" key={game.gameId}>
        <Link to={`/game/${game.startDateEastern}/${game.gameId}`}>
          <div className="gameCard">
            <div className="teamRow">
              <TeamItem team={game.hTeam} home={true} />
              <TeamItem team={game.vTeam} home={true} />
            </div>
            <div className="periodRow">{getPeriod(game)}</div>
          </div>
          {/* <div className="nugget">
            <em>{game.nugget || ''}</em>
          </div> */}
        </Link>
      </Col>
    );
  }
}
