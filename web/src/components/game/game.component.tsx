import { RouteComponentProps } from '@reach/router';
import React, { Component } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Button, Col, Container, Row } from 'reactstrap';

import './game.component.scss';
import { GetGameComponent } from '../../generated/graphqlComponents';
import { Boxscore } from '../boxscore/boxscore.component';
import { GameStats } from '../gameStats/gameStats.component';
import { Loading } from '../loading/loading.component';

interface Props {
  date: string,
  gameId: string,
}

export class Game extends Component<RouteComponentProps<Props>> {

  back() {
    window.history.back();
  }

  public render() {
    return (
      <GetGameComponent variables={{ date: this.props.date!, gameId: this.props.gameId! }}>
        {({ data, error, loading }) => {
          if (loading || !data) return <Loading />
          return (
            <div className="game">
              <Container>
                <Button color="primary" size="sm" onClick={() => this.back()}>
                  <IoIosArrowBack />
                  Back
                </Button>
                <Row>
                  <Col xs="12" sm="12" md="12" lg="12" className="gameItem">
                    <Boxscore period={data.game.period} hTeam={data.game.hTeam} vTeam={data.game.vTeam} playoffs={data.game.playoffs}/>
                    <GameStats gameData={data.game}/>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        }}
      </GetGameComponent>
    );
  }
}
