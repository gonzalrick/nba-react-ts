import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Row } from 'reactstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { ScheduleStore, TeamsStore } from '../../store';
import ScheduleItem from '../scheduleItem/scheduleItem.component';
import { humaniseDate } from '../../utils';
import './schedule.component.scss';

@inject('scheduleStore')
@inject('teamStore')
@observer
export class Schedule extends Component<any> {
  public gameStore: ScheduleStore = this.props.scheduleStore;
  public teamStore: TeamsStore = this.props.teamStore;
  public render() {
    return (
      <div className="schedule">
        <Container>
          <IoIosArrowBack
            className="pageDate"
            onClick={() => this.gameStore.prevDay()}
          />
          <span className="gameDate">
            {this.gameStore.numberOfGames} Games for{' '}
            {humaniseDate(this.gameStore.date)}
          </span>
          <IoIosArrowForward
            className="pageDate"
            onClick={() => this.gameStore.nextDay()}
          />
          <Row className="scheduleContainer">
            {this.gameStore.scheduledGames.map(game => {
              const hTeam = {
                ...game.hTeam,
                name: this.teamStore.getTeamName(game.hTeam.triCode),
              };
              const vTeam = {
                ...game.vTeam,
                name: this.teamStore.getTeamName(game.vTeam.triCode),
              };
              return (
                <ScheduleItem
                  game={game}
                  hTeam={hTeam}
                  vTeam={vTeam}
                  key={game.gameId}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
