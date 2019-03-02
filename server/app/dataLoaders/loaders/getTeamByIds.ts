import DataSource from '../../dataSource'
import { getCurrentSeason } from '../../utils';

export async function getTeamByIds(ids: string[]) {
  const teams = await DataSource.nbaAPI.getTeams(getCurrentSeason());
  return ids.map(id => teams.find(team => team.teamId === id));
};

