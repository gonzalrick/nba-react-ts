import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { IoIosArrowBack } from 'react-icons/io';
import { Button, Col, Container, Row, Table } from 'reactstrap';

import './game.component.scss';
import { GameStore, TeamsStore } from '../../store';
import { Boxscore } from '../boxscore/boxscore.component';
import { GameStats } from '../gameStats/gameStats.component';

@inject('gameStore')
@inject('teamStore')
@observer
export class Game extends Component<any> {
  public gameStore: GameStore = this.props.gameStore;
  public teamStore: TeamsStore = this.props.teamStore;

  componentDidMount() {
    this.gameStore.setGameArgs(this.props.date, this.props.gameId);
  }

  back() {
    window.history.back();
  }

  public render() {
    if (!this.gameStore.hasData) {
      return <div>Fetching game...</div>;
    }
    const game = this.gameStore.gameData;
    const hTeam = {
      ...game.hTeam,
      name: this.teamStore.getTeamName(game.hTeam.triCode),
    };
    const vTeam = {
      ...game.vTeam,
      name: this.teamStore.getTeamName(game.vTeam.triCode),
    };
    return (
      <div className="game">
        <Container>
          <Button color="primary" size="sm" onClick={() => this.back()}>
            <IoIosArrowBack />
            Back
          </Button>
          <Row>
            <Col xs="12" sm="12" md="12" lg="12" className="gameItem">
              <Boxscore period={game.period} hTeam={hTeam} vTeam={vTeam} />
              <GameStats stats={this.gameStore.gameStats} hTeam={hTeam} vTeam={vTeam} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
