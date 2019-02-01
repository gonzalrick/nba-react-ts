import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardBody,
  Row,
  Col,
} from 'reactstrap';

import './gameStats.component.scss';
import { Article } from '../article/article.component';
import { GameStore, PlayerStore, TeamsStore } from '../../store';
import { TeamStats } from '../teamStats/teamStats.component';

interface IState {
  activeTab: string;
}

@inject('gameStore')
@inject('playerStore')
@inject('teamStore')
@observer
export class GameStats extends React.Component<any> {
  public gameStore: GameStore = this.props.gameStore;
  public playerStore: PlayerStore = this.props.playerStore;
  public teamStore: TeamsStore = this.props.teamStore;

  state: IState;

  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab: any) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    const stats = this.gameStore.gameStats;
    const game = this.gameStore.gameData;
    const hTeam = this.teamStore.getTeam(game.hTeam.triCode);
    const vTeam = this.teamStore.getTeam(game.vTeam.triCode);
    return (
      <div className="gameStats">
        <Nav tabs>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '1' ? 'active' : ''}
              onClick={() => {
                this.toggle('1');
              }}
            >
              Game Stats
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
              onClick={() => {
                this.toggle('3');
              }}
            >
              {vTeam.fullName}
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '4' ? 'active' : ''}
              onClick={() => { this.toggle('4'); }}
            >
              Article
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
                          <th />
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
                <TeamStats stats={stats} team={hTeam} />
              </TabPane>
              <TabPane tabId="3">
                <TeamStats stats={stats} team={vTeam} />
              </TabPane>
              <TabPane tabId="4">
                <Article />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}
