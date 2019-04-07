import React from 'react';
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
import { TeamStats } from '../teamStats/teamStats.component';
import { GetGameGame } from '../../generated/graphqlComponents';

interface State {
  activeTab: string;
}

interface Props {
  gameData: GetGameGame,
}

export class GameStats extends React.Component<Props, State> {

  state: State;
  statKeys: string[] = [
    'points',
    'fgm',
    'fga',
    'fgp',
    'ftm',
    'fta',
    'ftp',
    'tpm',
    'tpa',
    'tpp',
    'offReb',
    'defReb',
    'totReb',
    'assists',
    'pFouls',
    'steals',
    'turnovers',
    'blocks',
  ];

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
    const stats = this.props.gameData.stats;
    const hTeam = this.props.gameData.hTeam;
    const vTeam = this.props.gameData.vTeam;
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
          {
            stats ?
              <>
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
              </>
              : null
          }
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
                          <th>{hTeam.triCode}</th>
                          <th />
                          <th>{vTeam.triCode}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.statKeys.map((key) => {
                            const hTotals: any = stats ? stats.hTeam.totals : [];
                            const vTotals: any = stats ? stats.vTeam.totals : [];
                            return <tr key={key}>
                              <th className="value">{hTotals[key] || '-'}</th>
                              <th className="key">{key.toUpperCase()}</th>
                              <th className="value">{vTotals[key] || '-'}</th>
                            </tr>
                          })
                        }
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabPane>
              {
                stats ?
                  <>
                    <TabPane tabId="2">
                      <TeamStats players={stats.activePlayers.filter(player => player.teamId === hTeam.teamId)} />
                    </TabPane>
                    <TabPane tabId="3">
                      <TeamStats players={stats.activePlayers.filter(player => player.teamId === vTeam.teamId)} />
                    </TabPane>
                  </>
                  : null
              }
              <TabPane tabId="4">
                <Article date={this.props.gameData.startDateEastern} gameId={this.props.gameData.gameId} />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}
