import { TypeResolver } from '../../interface';
import { GameStats as GameStatsType } from '../../generated';

export const GameStats: TypeResolver<GameStatsType> = {
  timesTied: root => root.timesTied,
  leadChanges: root => root.leadChanges,
  vTeam: root => root.vTeam,
  hTeam: root => root.hTeam,
  activePlayers: (root, args, { loaders }) => root.activePlayers.map(async ap => {
    const player = await loaders.getPlayerByIds.load(ap.personId);
    return {
      ...ap,
      firstName: player ? player.firstName : '',
      lastName: player ? player.lastName : '',
      jersey: player ? player.jersey : 0,
    };
  }),
}