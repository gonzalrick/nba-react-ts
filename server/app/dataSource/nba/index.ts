import { RESTDataSource } from 'apollo-datasource-rest';

export class NbaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.nba.net/10s/prod/';
  }

  async getSchedule(date: string) {
    const response = await this.get(`v1/20190102/0021800554_boxscore.json`);
    return this.reduceSchedule(response);
  }

  reduceSchedule(data: any) {
    return {
      gameId: data.basicGameData.gameId,
    };
  }
}