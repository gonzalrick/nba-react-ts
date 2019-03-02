import { observable, computed, autorun, action } from 'mobx';

import { getTeams } from '../services';
import { GeneralStore } from './general.store';
import { getCurrentSeason } from '../utils';
export class TeamsStore {
  @observable teams: any[] = [];

  constructor(generalStore: GeneralStore) {
    autorun(() => {
      generalStore.setLoading(true);

      const currentSeason = getCurrentSeason();
      getTeams(currentSeason).then(teams => {
        const nbaTeams = teams.league.standard.filter(
          (team: any) => team.isNBAFranchise,
        );
        this.teams = nbaTeams;
        generalStore.setLoading(false);
      });
    });
  }

  @computed
  get teamList(): any[] {
    return this.teams;
  }

  @computed
  get hasTeams(): boolean {
    return this.teams.length > 0;
  }

  @action.bound
  getTeamName(code: string) {
    const team = this.teams.find(team => team.tricode === code);
    return team ? team.fullName : '';
  }

  @action.bound
  getTeam(code: string) {
    return this.teams.find(team => team.tricode === code);
  }
}
