import React, { Component } from 'react';
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
import { Boxscore } from '../boxscore/boxscore.component';
import { TeamStats } from '../teamStats/teamStats.component';

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
    return (
      <div className="game">
        <Container>
          <Button color="primary" size="sm" onClick={() => this.back()}>
            <IoIosArrowBack />
            Back
          </Button>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="gameItem">
              <Boxscore/>
              <TeamStats />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}