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

  clock: Maybe<string>;

  isGameActivated: Maybe<boolean>;

  startDateEastern: Maybe<string>;

  startTimeUTC: Maybe<string>;

  nugget: Maybe<string>;

  period: Maybe<GetSchedulePeriod>;

  hTeam: Maybe<GetScheduleHTeam>;

  vTeam: Maybe<GetScheduleVTeam>;
};

export type GetSchedulePeriod = {
  __typename?: 'Period';

  current: Maybe<number>;

  isEndOfPeriod: Maybe<boolean>;

  isHalftime: Maybe<boolean>;

  maxRegular: Maybe<number>;
};

export type GetScheduleHTeam = {
  __typename?: 'Team';

  triCode: Maybe<string>;

  score: Maybe<number>;

  win: Maybe<number>;

  loss: Maybe<number>;
};

export type GetScheduleVTeam = {
  __typename?: 'Team';

  triCode: Maybe<string>;

  score: Maybe<number>;

  win: Maybe<number>;

  loss: Maybe<number>;
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
      }
      vTeam {
        triCode
        score
        win
        loss
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
