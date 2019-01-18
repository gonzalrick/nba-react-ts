import React from 'react';
import { inject, observer } from 'mobx-react';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';

import './teamStats.component.scss';
import { GameStore } from '../../store';

@inject('gameStore')
@observer
export class TeamStats extends React.Component<any> {
  public store: GameStore = this.props.gameStore;
  state: any;

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
    const stats = this.store.gameStats;
    const game = this.store.gameData;
    return (
      <div className="teamStats">
        <Nav tabs>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '1' ? 'active' : ''}
              onClick={() => { this.toggle('1'); }}
            >
              Stats
            </NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink
              className={this.state.activeTab === '3' ? 'active' : ''}
              onClick={() => { this.toggle('3'); }}
            >
              News
            </NavLink>
          </NavItem>
        </Nav>
        <Card>
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
                        {Object.keys(stats.hTeam.totals).map((key) => {
                          return <tr>
                            <th>{stats.hTeam.totals[key]}</th>
                            <th>{key}</th>
                            <th>{stats.vTeam.totals[key]}</th>
                          </tr>
                        })}
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