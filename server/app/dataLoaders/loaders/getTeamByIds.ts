import { getCurrentSeason } from '../../utils';
import { NbaAPI } from '../../dataSource';

export async function getTeamByIds(ids: string[]) {
  const nbaApi = new NbaAPI();
  const teams = await nbaApi.getTeams(getCurrentSeason());
  return ids.map(id => teams.find(team => team.teamId === id));
};

