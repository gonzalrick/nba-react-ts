import { TypeResolver } from '../../interface';
import { Team as TeamType } from '../../generated';

export const Team: TypeResolver<TeamType> = {
  teamId: root => root.teamId,
  triCode: root => root.triCode,
  linescore: root => root.linescore.map(score => score ? Number(score) : 0),
  loss: root => root.loss,
  score: root => root.score,
  win: root => root.win,
}