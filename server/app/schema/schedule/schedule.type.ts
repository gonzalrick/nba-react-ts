import { TypeResolver } from '../../interface';
import { Schedule as ScheduleType } from '../../generated';

export const Schedule: TypeResolver<ScheduleType> = {
  gameId: root => root.gameId,
}