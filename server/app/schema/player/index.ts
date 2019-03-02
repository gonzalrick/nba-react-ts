import definitions from './definitions';
import { Player } from './type';
import { players } from './query';

export const PlayerTypeDefs = definitions;
export const PlayerResolvers = {
  Player,
  Query: {
    players,
  }
}