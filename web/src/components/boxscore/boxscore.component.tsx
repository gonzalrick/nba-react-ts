import React from 'react';
import { Card, CardBody, Table } from 'reactstrap';

import './boxscore.component.scss';
import TeamBoxScore from './teamBoxscore/teamBoxscore.component';
import { getOvertime, } from '../../utils';
import { GetScheduleComponent } from '../../generated';

export const Boxscore = ({ period, hTeam, vTeam }: any) => (
  <GetScheduleComponent variables={{ date: '20190222' }}>
    {({ data, error, loading }) => {
      if (data) console.log(data);
      return (
        <Card>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th>1Q</th>
                  <th>2Q</th>
                  <th>3Q</th>
                  <th>4Q</th>
                  {period.current > 4
                    ? getOvertime(period.current).map(ot => <th>{ot}</th>)
                    : null}
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <TeamBoxScore team={hTeam} />
                <TeamBoxScore team={vTeam} />
              </tbody>
            </Table>
          </CardBody>
        </Card>
      )
    }}
  </GetScheduleComponent>
);
