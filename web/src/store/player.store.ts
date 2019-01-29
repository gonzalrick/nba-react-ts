import { observable, computed, autorun, action } from 'mobx';

import { getPlayers } from '../services';
import { GeneralStore } from './general.store';
import { getCurrentSeason } from '../utils';

export class PlayerStore {
  @observable players:any[] = [];

  constructor(generalStore: GeneralStore) {
    autorun(() => {
      generalStore.setLoading(true);

      const currentSeason = getCurrentSeason();
      getPlayers(currentSeason)
        .then(data => {
          this.players = data.league.standard;
          generalStore.setLoading(false);
        })
    });
  }

  @computed
  get playerList(): any[] {
    return this.players;
  }

  @action.bound
  getPlayer(id: string) {
    return this.players.find(player => player.personId === id);
  }
}