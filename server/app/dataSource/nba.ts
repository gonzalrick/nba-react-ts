import { RESTDataSource } from 'apollo-datasource-rest';
import { Schedule, ScheduleTeam, Team } from '../generated';

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

  async getTeams(date: string) {
    const { league } = await this.get(`v1/${date}/teams.json`);
    return league.standard.map((team: any) => this.reduceTeam(team));
  }

  reduceTeam(data: any): Team {
    return {
      city: data.city,
      fullName: data.fullName,
      triCode: data.tricode,
      teamId: data.teamId,
      confName: data.confName,
      divName: data.divName,
    }
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
      vTeam: this.reduceScheduleTeam(data.vTeam),
      hTeam: this.reduceScheduleTeam(data.hTeam),
      seasonYear: data.seasonYear,
      statusNum: data.statusNum,
    }

    return schedule;
  }

  reduceScheduleTeam(data: any): ScheduleTeam {
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