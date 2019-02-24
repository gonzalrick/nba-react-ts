interface Schedule {
  games: Games[];
  numGames: number;
}

interface Games {
  gameId: string;
  hTeam: ScheduleTeam;
  isGameActivated: boolean;
  nugget?: string;
  period: Period;
  seasonYear: string;
  startTimeUTC: string;
  statusNum: number;
  vTeam: ScheduleTeam;
}

interface ScheduleTeam {
  teamId: string;
  triCode: string;
  linescore: number[];
  loss: number;
  score: number;
  win: number;
}

interface Period {
  current: number;
  isEndOfPeriod: false;
  isHalftime: false;
  maxRegular: number;
  type: number;
}
