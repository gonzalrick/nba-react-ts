import { observable, computed, autorun, action } from 'mobx';

import { getTeams } from '../services';
import { GeneralStore } from './general.store';

export class TeamsStore {
  @observable teams:any[] = [];

  constructor(generalStore: GeneralStore) {
    autorun(() => {
      generalStore.setLoading(true);

      if (! Number(generalStore.seasonYear)) {
        generalStore.setLoading(false);
        return;
      }

      getTeams(generalStore.seasonYear)
        .then(teams => {
          const nbaTeams = teams.league.standard.filter((team: any) => team.isNBAFranchise);
          this.teams = nbaTeams;
          console.log(nbaTeams);
          generalStore.setLoading(false);
        })
    });
  }

  @computed
  get teamList(): any[] {
    return this.teams;
  }
}