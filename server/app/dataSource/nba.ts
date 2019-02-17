import { RESTDataSource } from 'apollo-datasource-rest';
import { Schedule } from '../generated';

export class NbaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.nba.net/10s/prod/';
  }

  async getSchedule(date: string) {
    const results = await this.get(`v2/${date}/scoreboard.json`);
    return results.map((result: any) => this.reduceSchedule(result));
  }

  reduceSchedule(data: any) {
    const schedule: Schedule = {
      gameId: data.basicGameData.gameId,
    }

    return schedule;
  }
}