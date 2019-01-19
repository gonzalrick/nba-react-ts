import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { Card, CardBody, Table } from 'reactstrap';

import './boxscore.component.scss';
import { GameStore } from '../../store';
import * as images from '../../assets';

@inject('gameStore')
@observer
export class Boxscore extends Component<any> {
  public store: GameStore = this.props.gameStore;

  getOvertime(currentPeriod: number) {
    let index = 5;
    const overtimes = [];
    while (index <= currentPeriod) {
      overtimes.push(`${index > 5 ? index - 4 : ''}OT`);
      index++;
    }
    return overtimes;
  }

  render() {
    const game = this.store.gameData;
    const img: any = images;
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
                ? this.getOvertime(game.period.current)
                    .map(ot => <th>{ot}</th>)
                : null
              }
              <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img className="teamIcon" src={img[game.hTeam.triCode.toLowerCase()]}/>
                </th>
                { game.hTeam.linescore.length > 0
                  ? game.hTeam.linescore.map((score: any) => <th className="value">{score.score}</th>)
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
                  <img className="teamIcon" src={img[game.vTeam.triCode.toLowerCase()]}/>
                </th>
                { game.vTeam.linescore.length > 0
                  ? game.vTeam.linescore.map((score: any) => <th className="value">{score.score}</th>)
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