import React, { FC } from 'react';
import { DateSelector } from './date-selector';
import { Games } from './games';
import { GetScheduleComponent } from '../../generated/graphqlComponents';
import { convertDateToUTC } from '../../utils';

import data from './games.json';
import { Loading } from '../Loading/loading';

export const Schedule: FC = () => {
  return (
    <section className="section">
      <div className="container">
        <DateSelector />

        <GetScheduleComponent
          fetchPolicy={'network-only'}
          pollInterval={30000}
          variables={{ date: convertDateToUTC(new Date()) }}
        >
          {({ data, error, loading }) => {
            if (!loading && data) return <Games games={data.schedule} />;
            return <Loading />;
          }}
        </GetScheduleComponent>
      </div>
    </section>
  );
};
