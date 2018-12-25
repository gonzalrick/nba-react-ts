import { observable, computed, action, autorun } from 'mobx';
import { addDays } from 'date-fns';

import { getSchedule } from '../services';

export default class ScheduleStore {
  @observable date = new Date();
  @observable games:any[] = [];

  constructor() {
    autorun(() => {
      getSchedule(this.date)
        .then(({ games }) => {
          this.updateGames(games);
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
  @action.bound
  updateGames(games: any) {
    this.games = games;
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