import { RESTDataSource } from 'apollo-datasource-rest';
import { Schedule, ScheduleTeam, Team, Player } from '../generated';
import { has, get, put } from '../utils/storage';

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

  async getTeams(date: string): Promise<Team[]> {
    const key = `${date}:teams`;
    if (has(key)) {
      return get(key);
    }

    const { league } = await this.get(`v1/${date}/teams.json`);
    const teams = league.standard.map((team: any) => this.reduceTeam(team));
    put(key, teams, 86400);
    return teams;
  }

  async getPlayers(date: string): Promise<Player[]> {
    const key = `${date}:players`;
    if (has(key)) {
      return get(key);
    }

    const { league } = await this.get(`v1/${date}/players.json`);
    const players = league.standard.map((team: any) => this.reducePlayer(team));
    put(key, players, 86400);
    return players;
  }

  reducePlayer(data: any): Player {
    return {
      firstName: data.firstName,
      lastName: data.lastName,
      personId: data.personId,
      jersey: data.jersey,
      pos: data.pos,
      heightFeet: data.heightFeet,
      heightInches: data.heightInches,
      heightMeters: data.heightMeters,
      weightPounds: data.weightPounds,
      weightKilograms: data.weightKilograms,
      dateOfBirthUTC: data.dateOfBirthUTC,
      teams: data.teams,
    };
  }

  reduceTeam(data: any): Team {
    return {
      city: data.city,
      fullName: data.fullName,
      triCode: data.tricode,
      teamId: data.teamId,
      confName: data.confName,
      divName: data.divName,
      logo: this.getTeamLogoUrl(data.fullName),
    }
  }

  reduceSchedule(data: any): Schedule {
    return {
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

  getTeamLogoUrl(teamName: string) {
    const teamNameUrl = teamName
      .toLowerCase()
      .replace(/ /g, '-')
      .replace('la-clippers', 'los-angeles-clippers');
    return `https://i.logocdn.com/nba/current/${teamNameUrl}.svg`;
  }
}