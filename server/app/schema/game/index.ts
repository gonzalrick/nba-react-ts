import definitions from './definitions';
import { Game } from './game.type';
import { game } from './query';
import { GameStats } from './gameStats.type';

export const GameTypeDefs = definitions;
export const GameResolvers = {
  Game,
  GameStats,
  Query: {
    game,
  }
};