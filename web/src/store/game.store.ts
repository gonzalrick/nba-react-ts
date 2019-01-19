import { observable, computed, action, autorun } from 'mobx';

import { getGame } from '../services';
import { GeneralStore } from './general.store';

export class GameStore {
  @observable date: string = '';
  @observable game: any = {};
  @observable gameId: any = 0;
  constructor(generalStore: GeneralStore) {
    autorun(async () => {
      if (this.gameId > 0) {
        generalStore.setLoading(true);
        this.game = await getGame(this.date, this.gameId);
        generalStore.setLoading(false);
      }
    });
  }

  @computed
  get gameData(): any {
    return this.game.basicGameData;
  }

  @computed
  get hasData(): boolean {
    return this.game.basicGameData !== undefined;
  }

  @computed
  get gameStats(): any {
    return this.game.stats;
  }

  @computed
  get hasStats(): boolean {
    return this.game.stats !== undefined;
  }

  @action.bound
  setGameArgs(date: string, gameId: number) {
    this.date = date;
    this.gameId = gameId;
  }
}