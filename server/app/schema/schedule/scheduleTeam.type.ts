import { TypeResolver } from '../../interface';
import { ScheduleTeam as ScheduleTeamType } from '../../generated';

export const ScheduleTeam: TypeResolver<ScheduleTeamType> = {
  teamId: root => root.teamId,
  triCode: root => root.triCode,
  linescore: root => root.linescore.map((score) => score ? Number(score) : 0),
  loss: root => root.loss,
  score: root => root.score,
  win: root => root.win,
}