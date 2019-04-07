import { Game, QueryResolvers } from '../../generated';

export const game: QueryResolvers.GameResolver<Game> = async (root, { date, gameId }, context) => {
  return context.dataSources.nbaAPI.getGame(date, gameId);
}