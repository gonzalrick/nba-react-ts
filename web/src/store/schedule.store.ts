import { observable, computed, action, autorun } from 'mobx';
import { addDays } from 'date-fns';

import { getSchedule } from '../services';
import { GeneralStore } from './general.store';

export class ScheduleStore {
  @observable date = new Date();
  @observable games:any[] = [];

  constructor(generalStore: GeneralStore) {
    autorun(() => {
      generalStore.setLoading(true);
      getSchedule(this.date)
        .then(({ games }) => {
          this.games = games;
          generalStore.setLoading(false);
        })
    });
  }

  @computed
  get scheduledGames(): any[] {
    return this.games;
  }

  @computed
  get numberOfGames(): number {
    return this.games.length;
  }

  @computed
  get scheduleDate(): Date {
    return this.date;
  }

  @action.bound
  nextDay() {
    this.date = addDays(this.date, 1);
  }

  @action.bound
  prevDay() {
    this.date = addDays(this.date, - 1);
  }
}