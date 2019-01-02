import React, { Component } from 'react';
import { Link } from '@reach/router';
import { inject, observer } from 'mobx-react';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Card,
  Container,
  CardBody,
  Col,
  Row
} from 'reactstrap';

import { GameStore } from '../../store';
import { getPeriod } from '../../utils';

@inject('gameStore')
@observer
export class Game extends Component<any> {
  public store: GameStore = this.props.gameStore;

  componentDidMount() {
    this.store.setGameArgs(this.props.date, this.props.gameId);
  }

  public render() {
    if (! this.store.hasData) {
      return <div>Fetching game...</div>
    }
    const game = this.store.gameData;
    return (
      <div className="dashboard">
        <Container>
          <Link to="/">
            <IoIosArrowBack />
            Back
          </Link>
          <Col xs="12" sm="12" md="12" lg="12" className="gameItem">
            <Card className="gameCard">
              <CardBody>
                <Row>
                  <Col xs="8" sm="" md="8">
                    <Row>
                      <Col xs="12">
                        <span>{game.hTeam.triCode}</span>
                      </Col>
                      <Col xs="12">
                        <span>{game.vTeam.triCode}</span>
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
          </Col>
        </Container>
      </div>
    );
  }
}