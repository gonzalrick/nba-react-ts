export type Maybe<T> = T | null;

// ====================================================
// Documents
// ====================================================

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
