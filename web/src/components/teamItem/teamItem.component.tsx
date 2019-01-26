import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Col, Row } from 'reactstrap';

import './teamItem.component.scss';
import { TeamsStore } from '../../store';
import { getTeamIconUrl } from '../../utils';

@inject('teamStore')
@observer
class TeamItem extends Component<any> {
    public teams: TeamsStore = this.props.teamStore;

    getTeamName(code: string): string {
        const team = this.teams.teamList.find(team => team.tricode === code);
        return team ? team.fullName : '';
    }

    render() {
        const team = this.props.team;
        const teamName = this.getTeamName(team.triCode);
        return (
            <Row className={`teamItem d-flex flex-row${this.props.home ? '' : '-reverse'}`}>
                <Col xs="9" className="nopadding">
                    <img className="icon" alt="team-logo" src={getTeamIconUrl(teamName)} />
                    <br/>
                    <span>{teamName}</span>
                    <br/>
                    <span>({team.win} - {team.loss})</span>
                </Col>
                <Col xs="3" className="score nopadding">
                    {team.score}
                </Col>
            </Row>
        );
    }
}

export default TeamItem;