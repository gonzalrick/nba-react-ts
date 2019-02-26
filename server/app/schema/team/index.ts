import definitions from './definitions';
import { Team } from './type';
import { teams } from './query';

export const typeDefs = definitions;
export const resolvers = {
  Team,
  Query: {
    teams,
  }
}