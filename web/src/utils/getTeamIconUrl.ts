export function getTeamIconUrl(teamName:string) {
  const teamNameUrl = teamName
      .toLowerCase()
      .replace(/ /g, '-')
      .replace('la-clippers', 'los-angeles-clippers');
  return `https://i.logocdn.com/nba/current/${teamNameUrl}.svg`;
}