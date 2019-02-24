import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Row } from 'reactstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { ScheduleStore } from '../../store';
import { ScheduleItem } from '../scheduleItem/scheduleItem.component';
import { humaniseDate, convertDateToUTC } from '../../utils';
import './schedule.component.scss';
import { GetScheduleComponent } from '../../generated/graphqlComponents';
import { Loading } from '..';

@inject('scheduleStore')
@observer
export class Schedule extends Component<any> {
  store: ScheduleStore = this.props.scheduleStore;
  public render() {
    return (
      <GetScheduleComponent variables={{ date: convertDateToUTC(this.store.date) }}>
        {({ data, error, loading }) => {
          if (loading) return <Loading />;
          console.log(data);
          return (
            <div className="schedule">
              <Container>
                <IoIosArrowBack
                  className="pageDate"
                  onClick={() => this.store.prevDay()}
                />
                <span className="gameDate">
                  {this.store.numberOfGames} Games for {humaniseDate(this.store.date)}
                </span>
                <IoIosArrowForward
                  className="pageDate"
                  onClick={() => this.store.nextDay()}
                />
                <Row className="scheduleContainer">
                  {data!.schedule.map(game => (
                    <ScheduleItem game={game} key={game.gameId} />
                  ))}
                </Row>
              </Container>
            </div>
          );
        }}
      </GetScheduleComponent>
    );
  }
}
