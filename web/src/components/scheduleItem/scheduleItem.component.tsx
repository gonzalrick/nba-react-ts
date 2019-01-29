import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from '@reach/router';

import TeamItem from '../teamItem/teamItem.component';
import { getPeriod } from '../../utils';

import './scheduleItem.component.scss';
import { GameStore } from '../../store';

@inject('gameStore')
@observer
export class ScheduleItem extends Component<any> {
  public store: GameStore = this.props.gameStore;

  render() {
    const game: any = this.props.game;
    return (
      <Col md="12" lg="6" className="scheduleItem" key={game.gameId}>
        <Link to={`/game/${game.startDateEastern}/${game.gameId}`}>
          <Card className="gameCard">
            <CardBody>
              <Row>
                <Col xs={{ size: 4, offset: 8 }} className="period">
                  <span>{getPeriod(game)}</span>
                </Col>
              </Row>
              <Row className="teamContainer">
                <Col>
                  <Row>
                    <Col xs="6">
                      <TeamItem team={game.hTeam} home={true} />
                    </Col>
                    <Col xs="6">
                      <TeamItem team={game.vTeam} home={false} />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="nugget">
                <Col xs="12">
                  <span>
                    <em>{game.nugget ? game.nugget.text : ''}</em>
                  </span>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Link>
      </Col>
    );
  }
}
