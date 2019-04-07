import { TypeResolver } from '../../interface';
import { Team as TeamType } from '../../generated';

export const Team: TypeResolver<TeamType> = {
  teamId: root => root.teamId,
  triCode: root => root.triCode,
  city: root => root.city,
  fullName: root => root.fullName,
  confName: root => root.confName,
  divName: root => root.divName,
}