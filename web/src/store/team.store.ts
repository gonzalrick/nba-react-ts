import { observable, computed, autorun, action } from 'mobx';

import { getTeams } from '../services';
import { GeneralStore } from './general.store';
import { getCurrentSeason } from '../utils';
export class TeamsStore {
  @observable teams: any[] = [];

  constructor(generalStore: GeneralStore) {
    autorun(async () => {
      generalStore.setLoading(true);
      await this.loadTeams();
      generalStore.setLoading(false);
    });
  }

  async loadTeams() {
    const season = getCurrentSeason();
    const allTeams = await getTeams(season);
    this.teams = allTeams.league.standard.filter(
      (team: any) => team.isNBAFranchise,
    );
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
