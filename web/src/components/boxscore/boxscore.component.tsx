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

  render() {
    const game = this.store.gameData;
    const hTeamName = this.teams.getTeamName(game.hTeam.triCode);
    const vTeamName = this.teams.getTeamName(game.vTeam.triCode);

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
                  ? game.hTeam.linescore.map((score: any) => <th className="value">{score.score}</th>)
                  : <>
                    <th key="h1">0</th>
                    <th key="h2">0</th>
                    <th key="h3">0</th>
                    <th key="h4">0</th>
                    </>
                }
                <th>{game.hTeam.score | 0}</th>
              </tr>
              <tr>
                <th scope="row">
                  <img className="teamIcon" src={getTeamIconUrl(vTeamName)}/>
                </th>
                { game.vTeam.linescore.length > 0
                  ? game.vTeam.linescore.map((score: any) => <th className="value">{score.score}</th>)
                  : <>
                    <th key="v1">0</th>
                    <th key="v2">0</th>
                    <th key="v3">0</th>
                    <th key="v4">0</th>
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