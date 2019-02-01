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
  statKeys: string[] = ['#', 'name', 'min', 'pts', 'reb', 'ast', 'stl', 'to', 'fg', '3pt']

  render() {
    const stats = this.props.stats;
    const team = this.props.team;
    return (
      <Row>
        <Col sm='12'>
          <Table>
            <thead>
              <tr>
                {this.statKeys.map(key => <th key={key}>{key.toUpperCase()}</th>)}
              </tr>
            </thead>
            <tbody>
              {
                stats ?
                  stats.activePlayers
                    .filter((player: any) => player.teamId === team.teamId)
                    .map((playerStats: any) => {
                      const player = this.playerStore.getById(playerStats.personId);
                      return (
                        <tr>
                          <th key='#'>{player.jersey}</th>
                          <th key='name'>{`${player.firstName} ${player.lastName}`}</th>
                          <th key='min'>{playerStats.min}</th>
                          {
                            playerStats.dnp ?
                              <th key='dnp'>{playerStats.dnp}</th> :
                              <>
                                <th key='pts'>{playerStats.points}</th>
                                <th key='reb'>{playerStats.totReb}</th>
                                <th key='ast'>{playerStats.assists}</th>
                                <th key='stl'>{playerStats.steals}</th>
                                <th key='to'>{playerStats.turnovers}</th>
                                <th key='fg'>{`${playerStats.fgm} / ${playerStats.fga}`}</th>
                                <th key='3pt'>{`${playerStats.tpm} / ${playerStats.tpa}`}</th>
                              </>
                          }
                        </tr>
                      );
                    }) :
                  this.playerStore.getByTeam(team.teamId)
                    .map(player => {
                      return (
                        <tr>
                          <th key='#'>{player.jersey}</th>
                          <th key='name'>{`${player.firstName} ${player.lastName}`}</th>
                          <th key='min'>-</th>
                          <th key='pts'>-</th>
                          <th key='reb'>-</th>
                          <th key='ast'>-</th>
                          <th key='stl'>-</th>
                          <th key='to'>-</th>
                          <th key='fg'>-</th>
                          <th key='3pt'>-</th>
                        </tr>
                      )
                    })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    );
  }
}