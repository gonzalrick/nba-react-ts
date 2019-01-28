import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, CardBody, Table } from 'reactstrap';

import './boxscore.component.scss';
import { GameStore, TeamsStore } from '../../store';
import { getOvertime, getTeamIconUrl } from '../../utils';

@inject('gameStore')
@inject('teamStore')
@observer
export class Boxscore extends Component<any> {
  public store: GameStore = this.props.gameStore;
  public teams: TeamsStore = this.props.teamStore;

  getTeamName(code: string): string {
    const team = this.teams.teamList.find(team => team.tricode === code);
    return team ? team.fullName : '';
  }

  render() {
    const game = this.store.gameData;
    const hTeamName = this.getTeamName(game.hTeam.triCode);
    const vTeamName = this.getTeamName(game.vTeam.triCode);

    return (
      <Card>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th></th>
              <th>1Q</th>
              <th>2Q</th>
              <th>3Q</th>
              <th>4Q</th>
              {game.period.current > 4
                ? getOvertime(game.period.current)
                    .map(ot => <th>{ot}</th>)
                : null
              }
              <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img className="teamIcon" src={getTeamIconUrl(hTeamName)}/>
                </th>
                { game.hTeam.linescore.length > 0
                  ? game.hTeam.linescore.map((score: any,key: number) => <th key={key.toString()} className="value">{score.score}</th>)
                  : <>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                    </>
                }
                <th>{game.hTeam.score | 0}</th>
              </tr>
              <tr>
                <th scope="row">
                  <img className="teamIcon" src={getTeamIconUrl(vTeamName)}/>
                </th>
                { game.vTeam.linescore.length > 0
                  ? game.vTeam.linescore.map((score: any, key: number) => <th key={key.toString()} className="value">{score.score}</th>)
                  : <>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                    <th>0</th>
                    </>
                }
                <th>{game.vTeam.score | 0}</th>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}