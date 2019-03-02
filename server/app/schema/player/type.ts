import { TypeResolver } from "../../interface";
import { Player as PlayerType } from '../../generated';

export const Player: TypeResolver<PlayerType> = {
  firstName: root => root.firstName,
  lastName: root => root.lastName,
  personId: root => root.personId,
  jersey: root => root.jersey,
  pos: root => root.pos,
  heightFeet: root => root.heightFeet,
  heightInches: root => root.heightInches,
  heightMeters: root => root.heightMeters,
  weightPounds: root => root.weightPounds,
  weightKilograms: root => root.weightKilograms,
  dateOfBirthUTC: root => root.dateOfBirthUTC,
  teams: (root, args, { loaders }) => root.teams.map(team => loaders.getTeamByIds.load(team.teamId)),
}