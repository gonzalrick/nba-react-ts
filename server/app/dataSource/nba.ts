import { RESTDataSource } from 'apollo-datasource-rest';
import { Schedule } from '../generated';

export class NbaAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://data.nba.net/10s/prod/';
  }

  async getSchedule(date: string) {
    const { games } = await this.get(`v2/${date}/scoreboard.json`);
    return games.map((game: any) => this.reduceSchedule(game));
  }

  reduceSchedule(data: any) {
    const schedule: Schedule = {
      gameId: data.gameId,
      isGameActivated: data.isGameActivated,
      startTimeUTC: data.startTimeUTC,
      endTimeUTC: data.endTimeUTC,
      startDateEastern: data.startDateEastern,
      nugget: data.nugget.text,
      period: data.period,
      vTeam: data.vTeam,
      hTeam: data.hTeam,
      seasonYear: data.seasonYear,
      statusNum: data.statusNum,
    }

    return schedule;
  }
}