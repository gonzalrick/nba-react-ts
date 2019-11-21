export function getOvertime(currentPeriod: number) {
  let index = 5;
  const overtimes = [];
  while (index <= currentPeriod) {
    overtimes.push(`${index > 5 ? index - 4 : ''}OT`);
    index++;
  }
  return overtimes;
}
