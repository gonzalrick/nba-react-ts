import { RESTDataSource } from 'apollo-datasource-rest';
import fetch from 'node-fetch';

import { Schedule, Team, Player } from '../generated';
import { has, get, put } from '../utils/storage';
import { reduceSchedule, reduceTeam, reducePlayer, reduceGame } from './reducers';

export class NbaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.nba.net/10s/prod/';
  }

  async getSchedule(date: string): Promise<Schedule[]> {
    const { games } = await this.get(`v2/${date}/scoreboard.json`)
      .catch(err => console.log(err));
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

    let data = await this.get(`v1/${date}/teams.json`)
      .catch(err => console.log(err));
    if (!data) {
      data = await fetch(`${this.baseURL}v1/${date}/teams.json`)
        .then(res => res.json())
        .catch(err => console.log(err));
    }
    const teams = data.league.standard.map((team: any) => reduceTeam(team));
    put(key, teams, 86400);
    return teams;
  }

  async getPlayers(date: string): Promise<Player[]> {
    const key = `${date}:players`;
    if (has(key)) {
      return get(key);
    }

    let data = await this.get(`v1/${date}/players.json`)
      .catch(err => console.log(err));
    if (!data) {
      data = await fetch(`${this.baseURL}v1/${date}/players.json`)
        .then(res => res.json())
        .catch(err => console.log(err));
    }
    const players = data.league.standard.map((team: any) => reducePlayer(team));
    put(key, players, 86400);
    return players;
  }
}