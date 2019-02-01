import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Table,
  Row,
  Col,
} from 'reactstrap';

import './teamStats.component.scss';
import { PlayerStore } from '../../store';

@inject('playerStore')
@observer
export class TeamStats extends React.Component<any> {
  public playerStore: PlayerStore = this.props.playerStore;

  render() {
    debugger;
    const stats = this.props.stats;
    const team = this.props.team;
    return (
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
                  .filter((player: any) => player.teamId === team.teamId)
                  .map((playerStats: any) => {
                    debugger;
                    const player = this.playerStore.getPlayer(playerStats.personId);
                    return (
                      <tr>
                        <th>{player.jersey}</th>
                        <th>{`${player.firstName} ${player.lastName}`}</th>
                        <th>{playerStats.min}</th>
                        {
                          playerStats.dnp ?
                            <th>{playerStats.dnp}</th> :
                            <>
                              <th>{playerStats.points}</th>
                              <th>{playerStats.totReb}</th>
                              <th>{playerStats.assists}</th>
                              <th>{playerStats.steals}</th>
                              <th>{playerStats.turnovers}</th>
                              <th>{`${playerStats.fgm} / ${playerStats.fga}`}</th>
                              <th>{`${playerStats.tpm} / ${playerStats.tpa}`}</th>
                            </>
                        }
                      </tr>
                    );
                  })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}