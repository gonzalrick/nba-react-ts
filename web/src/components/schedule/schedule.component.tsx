import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Row } from 'reactstrap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { GeneralStore } from '../../store';
import { ScheduleItem } from '../scheduleItem/scheduleItem.component';
import { humaniseDate, convertDateToUTC } from '../../utils';
import './schedule.component.scss';
import { GetScheduleComponent } from '../../generated/graphqlComponents';
import { Loading } from '..';

@inject('generalStore')
@observer
export class Schedule extends Component<any> {
  store: GeneralStore = this.props.generalStore;
  public render() {
    return (
      <GetScheduleComponent
        fetchPolicy={'network-only'}
        pollInterval={30000}
        variables={{ date: convertDateToUTC(this.store.date) }}
      >
        {({ data, error, loading }) => {
          if (loading || !data)
            return (
              <div className="schedule">
                <Container>
                  <Loading />
                  <Loading />
                </Container>
              </div>
            );
          return (
            <div className="schedule">
              <Container>
                <IoIosArrowBack
                  className="pageDate"
                  onClick={() => this.store.prevDay()}
                />
                <span className="gameDate">
                  {data ? data!.schedule.length : 'No'} Games for{' '}
                  {humaniseDate(this.store.date)}
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
