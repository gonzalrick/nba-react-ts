import { getCurrentSeason } from '../../utils';
import { NbaAPI } from '../../dataSource';

export async function getPlayerByIds(ids: string[]) {
  const nbaApi = new NbaAPI();
  const players = await nbaApi.getPlayers(getCurrentSeason());
  return ids.map(id => players.find(player => player.personId === id));
}