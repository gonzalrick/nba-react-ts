import definitions from './definitions';
import { Team } from './type';
import { teams } from './query';

export const TeamTypeDefs = definitions;
export const TeamResolvers = {
  Team,
  Query: {
    teams,
  }
};