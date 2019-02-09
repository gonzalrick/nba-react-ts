import React from 'react';
import { Col, Row } from 'reactstrap';

import './teamItem.component.scss';
import { getTeamIconUrl } from '../../utils';

export default ({ team, isHome }: any) => (
  <Row className={`teamItem d-flex flex-row${isHome ? '' : '-reverse'}`}>
    <Col xs="9" className="nopadding">
      <img className="icon" alt="team-logo" src={getTeamIconUrl(team.name)} />
      <br />
      <span>{team.name}</span>
      <br />
      <span>
        ({team.win} - {team.loss})
      </span>
    </Col>
    <Col xs="3" className="score nopadding">
      {team.score}
    </Col>
  </Row>
);
