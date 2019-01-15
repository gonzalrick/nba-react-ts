import React, { Component } from 'react';
import { Link } from '@reach/router';
import { inject, observer } from 'mobx-react';
import { IoIosArrowBack } from 'react-icons/io';
import {
  Button,
  Col,
  Container,
  Row,
  Table,
} from 'reactstrap';

import './game.component.scss';
import { GameStore } from '../../store';
import { getPeriod } from '../../utils';
import * as images from '../../assets';

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
    const img: any = images;
    return (
      <div className="game">
        <Container>
          <Button color="primary" size="sm" onClick={() => this.back()}>
            <IoIosArrowBack />
            Back
          </Button>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="gameItem">
              <Table>
                <thead>
                  <tr>
                    <th></th>
                  <th>1Q</th>
                  <th>2Q</th>
                  <th>3Q</th>
                  <th>4Q</th>
                  <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <img className="teamIcon" src={img[game.hTeam.triCode.toLowerCase()]}/>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>{game.hTeam.score}</th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img className="teamIcon" src={img[game.vTeam.triCode.toLowerCase()]}/>
                    </th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>{game.vTeam.score}</th>
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