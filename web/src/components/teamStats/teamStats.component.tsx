import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

import './teamStats.component.scss';
import { GameStore, PlayerStore, TeamsStore } from '../../store';

interface IState {
  activeTab: string;
}

@inject('gameStore')
@inject('playerStore')
@inject('teamStore')
@observer
export class TeamStats extends React.Component<any> {
  public gameStore: GameStore = this.props.gameStore;
  public playerStore: PlayerStore = this.props.playerStore;
  public teamStore: TeamsStore = this.props.teamStore;
  
  state: IState;

  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab: any) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const stats = this.gameStore.gameStats;
    const game = this.gameStore.gameData;
    const hTeam = this.teamStore.getTeam(game.hTeam.triCode);
    const vTeam = this.teamStore.getTeam(game.vTeam.triCode);
    return (
      <div className="teamStats">
        <Nav tabs>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '1' ? 'active' : ''}
              onClick={() => { this.toggle('1'); }}
            >
              Team Stats
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '2' ? 'active' : ''}
              onClick={() => { this.toggle('2'); }}
            >
              {hTeam.fullName}
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '3' ? 'active' : ''}
              onClick={() => { this.toggle('3'); }}
            >
              {vTeam.fullName}
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '4' ? 'active' : ''}
              onClick={() => { this.toggle('4'); }}
            >
              News
            </NavLink>
          </NavItem>
        </Nav>
        <Card className="statsCard">
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Table>
                      <thead>
                        <tr>
                          <th>{game.hTeam.triCode}</th>
                          <th></th>
                          <th>{game.vTeam.triCode}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          stats
                            ? Object.keys(stats.hTeam.totals).map((key) => {
                              return <tr key={key}>
                                <th className="value">{stats.hTeam.totals[key]}</th>
                                <th className="key">{key.toUpperCase()}</th>
                                <th className="value">{stats.vTeam.totals[key]}</th>
                              </tr>
                            })
                            : <tr></tr>
                        }
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Table>
                      <thead>
                        <tr>
                          <th key="number">#</th>
                          <th key="name">Name</th>
                          <th>MIN</th>
                          <th>PTS</th>
                          <th>REB</th>
                          <th>AST</th>
                          <th>STL</th>
                          <th>TO</th>
                          <th>FG</th>
                          <th>3PT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          stats.activePlayers
                            .filter((player: any) => player.teamId === hTeam.teamId)
                            .map((playerStats: any) => {
                              const player = this.playerStore.getPlayer(playerStats.personId);
                              return (
                                <tr>
                                  <th>{player.jersey}</th>
                                  <th>{`${player.firstName} ${player.lastName}`}</th>
                                  <th>{playerStats.min}</th>
                                  <th>{playerStats.points}</th>
                                  <th>{playerStats.totReb}</th>
                                  <th>{playerStats.assists}</th>
                                  <th>{playerStats.steals}</th>
                                  <th>{playerStats.turnovers}</th>
                                  <th>{`${playerStats.fgm} / ${playerStats.fga}`}</th>
                                  <th>{`${playerStats.tpm} / ${playerStats.tpa}`}</th>
                                </tr>
                              );
                            })
                        }
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}