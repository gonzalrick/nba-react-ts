import { observable, computed, action, runInAction, autorun } from 'mobx';
import { addDays } from 'date-fns';

import { getSchedule } from '../services';
import { GeneralStore } from './general.store';

export class ScheduleStore {
  @observable date = new Date();
  @observable games:any[] = [];
  @observable loading = true;

  constructor(generalStore: GeneralStore) {
    autorun(() => {
      generalStore.setLoading(true);
      getSchedule(this.date)
        .then(({ games }) => {
          this.updateGames(games);
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