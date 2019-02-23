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

  hTeam: Maybe<GetScheduleHTeam>;

  vTeam: Maybe<GetScheduleVTeam>;

  nugget: Maybe<string>;
};

export type GetScheduleHTeam = {
  __typename?: 'Team';

  triCode: Maybe<string>;

  score: Maybe<number>;
};

export type GetScheduleVTeam = {
  __typename?: 'Team';

  triCode: Maybe<string>;

  score: Maybe<number>;
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
      hTeam {
        triCode
        score
      }
      vTeam {
        triCode
        score
      }
      nugget
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
