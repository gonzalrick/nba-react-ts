import React, { Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from '@reach/router';

import TeamItem from '../teamItem/teamItem.component';
import { getPeriod } from '../../utils';

import './scheduleItem.component.scss';

export default ({ game, hTeam, vTeam }: any) => (
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
                  <TeamItem team={hTeam} isHome={true} />
                </Col>
                <Col xs="6">
                  <TeamItem team={vTeam} isHome={false} />
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
