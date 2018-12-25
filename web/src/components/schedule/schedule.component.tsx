import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Row } from 'reactstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import ScheduleStore from '../../store/schedule.store';
import { ScheduleItem } from '../scheduleItem/scheduleItem.component';
import { humaniseDate } from '../../utils';
import './schedule.component.scss';

@inject('scheduleStore')
@observer
export class Schedule extends Component<any> {
  public store: ScheduleStore = this.props.scheduleStore;
  public render () {
    return (
      <div className="schedule">
          <Container>
              <IoIosArrowBack className="pageDate" onClick={() => this.store.prevDay()}/>
              <span className="gameDate">{this.store.numberOfGames} Games for {humaniseDate(this.store.date)}</span>
              <IoIosArrowForward className="pageDate" onClick={() => this.store.nextDay()}/>
              <Row className="scheduleContainer">
                {this.store.scheduledGames.map(game => <ScheduleItem game={game} key={game.gameId} />)}
              </Row>
          </Container>
      </div>
    );
  }
}
