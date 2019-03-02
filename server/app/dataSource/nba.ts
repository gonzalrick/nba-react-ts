import { RESTDataSource } from 'apollo-datasource-rest';

import { Schedule, Team, Player } from '../generated';
import { has, get, put } from '../utils/storage';
import { reduceSchedule, reduceTeam, reducePlayer, reduceGame } from './reducers';

export class NbaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.nba.net/10s/prod/';
  }

  async getSchedule(date: string): Promise<Schedule[]> {
    const { games } = await this.get(`v2/${date}/scoreboard.json`);
    return games.map((game: any) => reduceSchedule(game));
  }

  async getGame(date: string, gameId: string): Promise<any> {
    const data = await this.get(`v1/${date}/${gameId}_boxscore.json`);
    return reduceGame(data);
  }

  async getTeams(date: string): Promise<Team[]> {
    const key = `${date}:teams`;
    if (has(key)) {
      return get(key);
    }

    const { league } = await this.get(`v1/${date}/teams.json`);
    const teams = league.standard.map((team: any) => reduceTeam(team));
    put(key, teams, 86400);
    return teams;
  }

  async getPlayers(date: string): Promise<Player[]> {
    const key = `${date}:players`;
    if (has(key)) {
      return get(key);
    }

    const { league } = await this.get(`v1/${date}/players.json`);
    const players = league.standard.map((team: any) => reducePlayer(team));
    put(key, players, 86400);
    return players;
  }
}