import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import * as images from '../../assets';

import './teamItem.component.scss';

class TeamItem extends Component<any> {
    render() {
        const img: any = images;
        debugger;
        const team = this.props.team;
        return (
            <Row className="teamItem">
                <Col xs="4">
                    <img className="icon" alt="hteam" src={img[team.triCode.toLowerCase()]} />
                </Col>
                <Col xs="4">
                    {team.triCode}
                </Col>
                <Col xs="4">
                    {team.score}
                </Col>
            </Row>
        );
    }
}

export default TeamItem;