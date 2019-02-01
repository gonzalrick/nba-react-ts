import { observable, computed, autorun, action } from 'mobx';

import { getPlayers } from '../services';
import { GeneralStore } from './general.store';
import { getCurrentSeason } from '../utils';

export class PlayerStore {
  @observable players: any[] = [];

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
  getById(id: string) {
    return this.players.find(player => player.personId === id);
  }

  @action.bound
  getByTeam(teamId: string) {
    return this.players.filter(player => player.teamId === teamId)
  }

}