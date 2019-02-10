import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  Card,
  CardBody,
} from 'reactstrap';

import './gameStats.component.scss';
import { Article } from '../article/article.component';
import { TeamStats } from '../teamStats/teamStats.component';
import Tab from './tab.component';
import GameStateTable from './gameStatsTable.component';

interface IState {
  activeTab: number;
}

interface IProps {
  stats: any,
  hTeam: any,
  vTeam: any,
}

export class GameStats extends React.Component<IProps, IState> {

  state: IState;

  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1,
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
    const stats = this.props.stats;
    const hTeam = this.props.hTeam;
    const vTeam = this.props.vTeam;
    return (
      <div className="gameStats">
        <Nav tabs>
          <Tab title={'Game Stats'} toggle={this.toggle} isActive={this.state.activeTab === 1} index={1} />
          <Tab title={hTeam.name} toggle={this.toggle} isActive={this.state.activeTab === 2} index={2} />
          <Tab title={vTeam.name} toggle={this.toggle} isActive={this.state.activeTab === 3} index={3} />
          <Tab title={'Article'} toggle={this.toggle} isActive={this.state.activeTab === 4} index={4} />
        </Nav>
        <Card className="statsCard">
          <CardBody>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId={1}>
                <GameStateTable stats={stats} hTeam={hTeam} vTeam={vTeam} />
              </TabPane>
              <TabPane tabId={2}>
                <TeamStats stats={stats} team={hTeam} />
              </TabPane>
              <TabPane tabId={3}>
                <TeamStats stats={stats} team={vTeam} />
              </TabPane>
              <TabPane tabId={4}>
                <Article />
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </div>
    );
  }
}
