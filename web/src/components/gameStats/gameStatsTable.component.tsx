import React from 'react';
import {
  Table,
  Col,
  Row,
} from 'reactstrap';

const statKeys: string[] = [
  'points', 'fgm', 'fga', 'fgp', 'ftm', 'fta', 'ftp', 'tpm', 'tpa', 'tpp', 'offReb',
  'defReb', 'totReb', 'assists', 'pFouls', 'steals', 'turnovers', 'blocks',
];

export default ({ stats, hTeam, vTeam }: any) => (
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
            statKeys.map((key) => {
              return <tr key={key}>
                <th className="value">{stats ? stats.hTeam.totals[key] : '-'}</th>
                <th className="key">{key.toUpperCase()}</th>
                <th className="value">{stats ? stats.vTeam.totals[key] : '-'}</th>
              </tr>
            })
          }
        </tbody>
      </Table>
    </Col>
  </Row>
);