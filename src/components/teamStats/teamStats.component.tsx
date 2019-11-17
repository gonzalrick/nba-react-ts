import React from 'react';
import {
  Table,
  Row,
  Col,
} from 'reactstrap';

import './teamStats.component.scss';
import { GetGameActivePlayers } from '../../generated/graphqlComponents';

interface Props {
  players: GetGameActivePlayers[],
}

export class TeamStats extends React.Component<Props> {
  statKeys: string[] = ['#', 'name', 'min', 'pts', 'reb', 'ast', 'stl', 'to', 'fg', '3pt']

  render() {
    const players = this.props.players;
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
                players
                  .map((player: any) => {
                    return (
                      <tr>
                        <th key='#'>{player.jersey}</th>
                        <th key='name'>{`${player.firstName} ${player.lastName}`}</th>
                        <th key='min'>{player.min}</th>
                        {
                          player.dnp ?
                            <th key='dnp' colSpan={7}>{player.dnp}</th> :
                            <>
                              <th key='pts'>{player.points}</th>
                              <th key='reb'>{player.totReb}</th>
                              <th key='ast'>{player.assists}</th>
                              <th key='stl'>{player.steals}</th>
                              <th key='to'>{player.turnovers}</th>
                              <th key='fg'>{`${player.fgm} / ${player.fga}`}</th>
                              <th key='3pt'>{`${player.tpm} / ${player.tpa}`}</th>
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