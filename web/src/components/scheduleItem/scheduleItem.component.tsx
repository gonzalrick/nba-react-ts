import React, { Component } from 'react';
import { Card,
    CardBody,
    Col,
    Row } from 'reactstrap';
import { Link } from '@reach/router';

import TeamItem from '../teamItem/teamItem.component';
import { getPeriod } from '../../utils';

import './scheduleItem.component.scss';

export class ScheduleItem extends Component<any> {
    render() {
      const game: any = this.props.game;
      return (
        <Col xs="12" sm="12" md="6" lg="4" className="scheduleItem" key={game.gameId}>
          <Link to={ `/game/${game.startDateEastern}/${game.gameId}`}>
            <Card className="gameCard">
              <CardBody>
                <Row>
                  <Col xs="8" sm="" md="8">
                    <Row>
                      <Col xs="12">
                        <TeamItem team={game.hTeam} />
                      </Col>
                      <Col xs="12">
                        <TeamItem team={game.vTeam} />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs="4" sm="6" md="4" className="period">
                    <span>
                      {getPeriod(game)}
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