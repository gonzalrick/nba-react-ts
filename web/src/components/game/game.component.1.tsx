import React, { Component } from 'react';
import { Link } from '@reach/router';
import { inject, observer } from 'mobx-react';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Button,
  Card,
  Container,
  CardBody,
  Col,
  Row,
  Table,
} from 'reactstrap';

import './game.component.scss';
import { GameStore } from '../../store';
import { getPeriod } from '../../utils';

@inject('gameStore')
@observer
export class Game extends Component<any> {
  public store: GameStore = this.props.gameStore;

  componentDidMount() {
    this.store.setGameArgs(this.props.date, this.props.gameId);
  }

  back() {
    window.history.back();
  }

  public render() {
    if (! this.store.hasData) {
      return <div>Fetching game...</div>
    }
    const game = this.store.gameData;
    return (
      <div className="game">
        <Container>
          <Button color="primary" size="sm" onClick={() => this.back()}>
            <IoIosArrowBack />
            Back
          </Button>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="gameItem">
              {/* <Card>
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
              </Card> */}
              <Table striped>
                <thead>
                  <th></th>
                  <th>1Q</th>
                  <th>2Q</th>
                  <th>3Q</th>
                  <th>4Q</th>
                </thead>
                <tbody>
                  <tr>
                    {game.hTeam.triCode}
                  </tr>
                  <tr>
                    {game.vTeam.triCode}
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}