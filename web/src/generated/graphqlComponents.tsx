export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

export type GetGameVariables = {
  date: string;
  gameId: string;
};

export type GetGameQuery = {
  __typename?: 'Query';

  game: GetGameGame;
};

export type GetGameGame = {
  __typename?: 'Game';

  gameId: string;

  startDateEastern: string;

  period: GetGamePeriod;

  hTeam: GetGameHTeam;

  vTeam: GetGameVTeam;

  arena: string;

  nugget: string;

  playoffs: Maybe<GetGamePlayoffs>;

  stats: Maybe<GetGameStats>;
};

export type GetGamePeriod = {
  __typename?: 'Period';

  current: number;

  isEndOfPeriod: boolean;

  isHalftime: boolean;

  maxRegular: number;

  type: number;
};

export type GetGameHTeam = {
  __typename?: 'ScheduleTeam';

  teamId: string;

  triCode: string;

  fullName: Maybe<string>;

  score: number;

  linescore: (Maybe<number>)[];

  logo: Maybe<string>;
};

export type GetGameVTeam = {
  __typename?: 'ScheduleTeam';

  teamId: string;

  triCode: string;

  fullName: Maybe<string>;

  score: number;

  linescore: (Maybe<number>)[];

  logo: Maybe<string>;
};

export type GetGamePlayoffs = {
  __typename?: 'Playoffs';

  summary: Maybe<string>;
};

export type GetGameStats = {
  __typename?: 'GameStats';

  hTeam: GetGame_HTeam;

  vTeam: GetGame_VTeam;

  timesTied: number;

  activePlayers: GetGameActivePlayers[];
};

export type GetGame_HTeam = {
  __typename?: 'GameTeamStats';

  totals: GetGameTotals;
};

export type GetGameTotals = {
  __typename?: 'GameTotals';

  points: number;

  fgm: number;

  fga: number;

  fgp: number;

  ftm: number;

  fta: number;

  ftp: number;

  tpm: number;

  tpa: number;

  tpp: number;

  offReb: number;

  defReb: number;

  totReb: number;

  assists: number;

  pFouls: number;

  steals: number;

  turnovers: number;

  blocks: number;
};

export type GetGame_VTeam = {
  __typename?: 'GameTeamStats';

  totals: GetGame_Totals;
};

export type GetGame_Totals = {
  __typename?: 'GameTotals';

  points: number;

  fgm: number;

  fga: number;

  fgp: number;

  ftm: number;

  fta: number;

  ftp: number;

  tpm: number;

  tpa: number;

  tpp: number;

  offReb: number;

  defReb: number;

  totReb: number;

  assists: number;

  pFouls: number;

  steals: number;

  turnovers: number;

  blocks: number;
};

export type GetGameActivePlayers = {
  __typename?: 'GamePlayerStats';

  teamId: string;

  firstName: string;

  lastName: string;

  jersey: string;

  pos: string;

  points: string;

  totReb: string;

  assists: string;

  steals: string;

  turnovers: string;

  fgm: string;

  fga: string;

  tpm: string;

  tpa: string;

  min: string;

  dnp: string;
};

export type GetScheduleVariables = {
  date: string;
};

export type GetScheduleQuery = {
  __typename?: 'Query';

  schedule: GetScheduleSchedule[];
};

export type GetScheduleSchedule = {
  __typename?: 'Schedule';

  gameId: string;

  clock: string;

  isGameActivated: boolean;

  startDateEastern: string;

  startTimeUTC: string;

  nugget: string;

  period: GetSchedulePeriod;

  hTeam: GetScheduleHTeam;

  vTeam: GetScheduleVTeam;
};

export type GetSchedulePeriod = {
  __typename?: 'Period';

  current: number;

  isEndOfPeriod: boolean;

  isHalftime: boolean;

  maxRegular: number;
};

export type GetScheduleHTeam = {
  __typename?: 'ScheduleTeam';

  triCode: string;

  score: number;

  win: number;

  loss: number;

  city: Maybe<string>;

  fullName: Maybe<string>;

  confName: Maybe<string>;

  divName: Maybe<string>;

  logo: Maybe<string>;
};

export type GetScheduleVTeam = {
  __typename?: 'ScheduleTeam';

  triCode: string;

  score: number;

  win: number;

  loss: number;

  city: Maybe<string>;

  fullName: Maybe<string>;

  confName: Maybe<string>;

  divName: Maybe<string>;

  logo: Maybe<string>;
};

export type GetTeamsVariables = {
  date: string;
};

export type GetTeamsQuery = {
  __typename?: 'Query';

  teams: GetTeamsTeams[];
};

export type GetTeamsTeams = {
  __typename?: 'Team';

  teamId: string;

  city: string;

  fullName: string;

  triCode: string;

  confName: string;

  divName: string;
};

import * as ReactApollo from 'react-apollo';
import * as React from 'react';
import gql from 'graphql-tag';

// ====================================================
// Components
// ====================================================

export const GetGameDocument = gql`
  query getGame($date: String!, $gameId: String!) {
    game(date: $date, gameId: $gameId) {
      gameId
      startDateEastern
      period {
        current
        isEndOfPeriod
        isHalftime
        maxRegular
        type
      }
      hTeam {
        teamId
        triCode
        fullName
        score
        linescore
        logo
      }
      vTeam {
        teamId
        triCode
        fullName
        score
        linescore
        logo
      }
      arena
      nugget
      playoffs {
        summary
      }
      stats {
        hTeam {
          totals {
            points
            fgm
            fga
            fgp
            ftm
            fta
            ftp
            tpm
            tpa
            tpp
            offReb
            defReb
            totReb
            assists
            pFouls
            steals
            turnovers
            blocks
          }
        }
        vTeam {
          totals {
            points
            fgm
            fga
            fgp
            ftm
            fta
            ftp
            tpm
            tpa
            tpp
            offReb
            defReb
            totReb
            assists
            pFouls
            steals
            turnovers
            blocks
          }
        }
        timesTied
        activePlayers {
          teamId
          firstName
          lastName
          jersey
          pos
          points
          totReb
          assists
          steals
          turnovers
          fgm
          fga
          tpm
          tpa
          min
          dnp
        }
      }
    }
  }
`;
export class GetGameComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetGameQuery, GetGameVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetGameQuery, GetGameVariables>
        query={GetGameDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetGameProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetGameQuery, GetGameVariables>
> &
  TChildProps;
export function GetGameHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetGameQuery,
        GetGameVariables,
        GetGameProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetGameQuery,
    GetGameVariables,
    GetGameProps<TChildProps>
  >(GetGameDocument, operationOptions);
}
export const GetScheduleDocument = gql`
  query getSchedule($date: String!) {
    schedule(date: $date) {
      gameId
      clock
      isGameActivated
      startDateEastern
      startTimeUTC
      nugget
      period {
        current
        isEndOfPeriod
        isHalftime
        maxRegular
      }
      hTeam {
        triCode
        score
        win
        loss
        city
        fullName
        confName
        divName
        logo
      }
      vTeam {
        triCode
        score
        win
        loss
        city
        fullName
        confName
        divName
        logo
      }
    }
  }
`;
export class GetScheduleComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetScheduleQuery, GetScheduleVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetScheduleQuery, GetScheduleVariables>
        query={GetScheduleDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetScheduleProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetScheduleQuery, GetScheduleVariables>
> &
  TChildProps;
export function GetScheduleHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetScheduleQuery,
        GetScheduleVariables,
        GetScheduleProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetScheduleQuery,
    GetScheduleVariables,
    GetScheduleProps<TChildProps>
  >(GetScheduleDocument, operationOptions);
}
export const GetTeamsDocument = gql`
  query getTeams($date: String!) {
    teams(date: $date) {
      teamId
      city
      fullName
      triCode
      confName
      divName
    }
  }
`;
export class GetTeamsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetTeamsQuery, GetTeamsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetTeamsQuery, GetTeamsVariables>
        query={GetTeamsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type GetTeamsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetTeamsQuery, GetTeamsVariables>
> &
  TChildProps;
export function GetTeamsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetTeamsQuery,
        GetTeamsVariables,
        GetTeamsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.graphql<
    TProps,
    GetTeamsQuery,
    GetTeamsVariables,
    GetTeamsProps<TChildProps>
  >(GetTeamsDocument, operationOptions);
}
