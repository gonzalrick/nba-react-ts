import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import './teamItem.component.scss';

class TeamItem extends Component<any> {
  render() {
    const team = this.props.team;
    return (
      <Row className={`teamItem d-flex flex-row${this.props.home ? '' : '-reverse'}`}>
        <Col xs="9" className="nopadding">
          <img className="icon" alt="team-logo" src={team.logo} />
          <br />
          <span>{team.fullName}</span>
          <br />
          <span>({team.win} - {team.loss})</span>
        </Col>
        <Col xs="3" className="score nopadding">
          {team.score || ''}
        </Col>
      </Row>
    );
  }
}

export default TeamItem;
