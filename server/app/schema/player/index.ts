import definitions from './definitions';
import { Player } from './type';
import { players } from './query';

export const typeDefs = definitions;
export const resolvers = {
  Player,
  Query: {
    players,
  }
}