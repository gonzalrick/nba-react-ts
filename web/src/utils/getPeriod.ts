import { format } from 'date-fns';

export function getPeriod(game: any) {
  const period = game.period;
  let periodStr = '';

  if (game.isGameActivated || period.current > 0) {
    if (period.isHalftime) {
      periodStr = 'Halftime';
    } else if (period.current === period.maxRegular && !game.clock) {
      periodStr = 'Final';
    } else if (period.isEndOfPeriod) {
      periodStr = `End of ${period.current}Q`;
    } else if (period.current <= 4) {
      periodStr = `${period.current}Q ${game.clock} `;
    } else {
      periodStr = `OT ${game.clock}`;
    }
  } else {
    periodStr = format(game.startTimeUTC, 'hh:mm a');
  }
  return periodStr;
}
