import { observable, computed, action, autorun } from 'mobx';

import { getGame } from '../services';
import { GeneralStore } from './general.store';
import { ScheduleStore } from './schedule.store';

export class GameStore {
  @observable date = new Date();
  @observable gameId: number = 0;
  @observable game: any = {};

  constructor(generalStore: GeneralStore, scheduleStore: ScheduleStore) {
    autorun(() => {
      generalStore.setLoading(true);

      if (! this.gameId) return;

      getGame(scheduleStore.scheduleDate, this.gameId)
        .then(({ basicGameData }) => {
          debugger;
          this.updateGame(basicGameData);
          generalStore.setLoading(false);
        })
        .catch(err => console.log(err));
    });
  }

  @computed
  get currentGame(): any {
    return this.game;
  }

  @action.bound
  updateGame(game: any) {
    this.game = game;
  }

  @action.bound
  setGameId(gameId: number = 0) {
    this.gameId = gameId;
  }
}