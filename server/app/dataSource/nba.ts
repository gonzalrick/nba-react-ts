import { RESTDataSource } from 'apollo-datasource-rest';
import { Schedule, Team } from '../generated';

interface Linescore {
  score: string,
}

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
      clock: data.clock,
      isGameActivated: data.isGameActivated,
      startTimeUTC: data.startTimeUTC,
      startDateEastern: data.startDateEastern,
      nugget: data.nugget.text,
      period: data.period,
      vTeam: this.reduceTeam(data.vTeam),
      hTeam: this.reduceTeam(data.hTeam),
      seasonYear: data.seasonYear,
      statusNum: data.statusNum,
    }

    return schedule;
  }

  reduceTeam(data: any): Team {
    return {
      teamId: data.teamId,
      linescore: data.linescore.map(({ score }: Linescore) => Number(score)),
      score: Number(data.score),
      loss: Number(data.loss),
      win: Number(data.win),
      triCode: data.triCode,
    }
  }
}