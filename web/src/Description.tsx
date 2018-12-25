import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import ScheduleStore from './store/schedule.store';

@inject('scheduleStore')
@observer
class Description extends Component<any> {

  public store: ScheduleStore = this.props.scheduleStore;
  
  public render() {
    const games = this.store.numberOfGames;
    return (
      <div>
        <button onClick={() => this.store.prevDay()}>Prev</button>
        <p>Number of games {games}</p>
        <button onClick={() => this.store.nextDay()}>Next</button>
      </div>
    )
  }
}

export default Description;
