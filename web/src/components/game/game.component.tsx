import { RouteComponentProps } from '@reach/router';
import React, { Component } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Col, Container, Row, Card, CardBody, TabPane } from 'reactstrap';

import './game.component.scss';
import { GetGameComponent } from '../../generated/graphqlComponents';
import { Boxscore } from '../boxscore/boxscore.component';
import { GameStats } from '../gameStats/gameStats.component';
import { Loading } from '../loading/loading.component';
import TabContent from 'reactstrap/lib/TabContent';

interface Props {
  date: string,
  gameId: string,
}

interface State {
  active: string;
}

export class Game extends Component<RouteComponentProps<Props>, State> {

  state: State;

  constructor(props: RouteComponentProps<Props>) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      active: 'stats',
    };
  }

  back() {
    window.history.back();
  }

  toggle(tab: string) {
    if (this.state.active !== tab) {
      this.setState({
        active: tab,
      })
    }
  }

  isActive(tab: string) {
    return this.state.active === tab ? 'sectionLink active' : 'sectionLink ';
  }

  public render() {
    return (
      <GetGameComponent fetchPolicy={'network-only'} pollInterval={30000} variables={{ date: this.props.date!, gameId: this.props.gameId! }}>
        {({ data, error, loading }) => {
          if (loading || !data) return <Loading />
          return (
            <div className="game">
              <Container>
                <Card className="mb-2">
                  <CardBody>
                    <Row className="titleRow">
                      <Col xs="1">
                        <IoMdArrowBack className="backIcon" onClick={() => this.back()} />
                      </Col>
                      <Col className="title" xs={{ size: 8, offset: 1 }}>
                        <span>{data.game.vTeam.fullName} at {data.game.hTeam.fullName}</span>
                      </Col>
                    </Row>

                    <Row noGutters>
                      <Col className={this.isActive('stats')} onClick={() => this.toggle('stats')} xs="4">
                        <span>Stats</span>
                      </Col>
                      <Col className={this.isActive('boxscore')} onClick={() => this.toggle('boxscore')} xs="4">
                        <span>Boxscore</span>
                      </Col>
                      <Col className={this.isActive('plays')} onClick={() => this.toggle('plays')} xs="4">
                        <span>Play by play</span>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <TabContent activeTab={this.state.active}>
                  <TabPane tabId="stats">
                    <GameStats gameData={data.game} />
                  </TabPane>
                  <TabPane tabId="boxscore">
                    <Boxscore
                      period={data.game.period}
                      hTeam={data.game.hTeam}
                      vTeam={data.game.vTeam}
                      playoffs={data.game.playoffs}
                    />
                  </TabPane>
                </TabContent>
              </Container>
            </div>
          );
        }}
      </GetGameComponent>
    );
  }
}
