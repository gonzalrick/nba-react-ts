import React, { Component } from 'react';
import { Row } from 'reactstrap';

import './teamItem.component.scss';

class TeamItem extends Component<any> {
  render() {
    const team = this.props.team;
    return (
      <Row className="teamItem">
        <div className="teamLogo">
          <img className="icon" alt="team-logo" src={team.logo} />
        </div>
        <div className="teamName">
          <span>{team.fullName}</span>
        </div>
        <div className="teamScore">
          <span>{team.score || ''}</span>
        </div>
      </Row>
    );
  }
}

export default TeamItem;
