import { Player, QueryResolvers } from '../../generated';

export const players: QueryResolvers.PlayersResolver<Player[]> = async (root, { date }, context) => {
  return context.dataSources.nbaAPI.getPlayers(date);
}