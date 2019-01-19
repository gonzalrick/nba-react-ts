import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import { Col, Row } from 'reactstrap';
import * as images from '../../assets';

import './teamItem.component.scss';
import { TeamsStore } from '../../store';

@inject('teamStore')
@observer
class TeamItem extends Component<any> {
    public teams: TeamsStore = this.props.teamStore;

    getTeamName(code: string): string {
        const team = this.teams.teamList.find(team => team.tricode === code);
        return team ? team.fullName : '';
    }

    render() {
        const img: any = images;
        const team = this.props.team;
        return (
            <Row className={`teamItem d-flex flex-row${this.props.home ? '' : '-reverse'}`}>
                <Col xs="9" className="nopadding">
                    <img className="icon" alt="team-logo" src={img[team.triCode.toLowerCase()]} />
                    <br/>
                    <span>{this.getTeamName(team.triCode)}</span>
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