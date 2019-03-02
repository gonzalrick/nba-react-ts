import DataSource from '../../dataSource'
import { getCurrentSeason } from '../../utils';

export async function getPlayerByIds(ids: string[]) {
  const players = await DataSource.nbaAPI.getPlayers(getCurrentSeason());
  return ids.map(id => players.find(player => player.personId === id));
};

