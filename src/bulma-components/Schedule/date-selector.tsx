import React, { FC } from 'react';

import './date-selector.scss';

export const DateSelector: FC = () => {
  const next = 'Tomorrow';
  const prev = 'Yesterday';
  const today = 'Today';
  return (
    <div className="tabs is-fullwidth is-toggle is-white">
      <ul>
        <li>
          <a>{prev}</a>
        </li>
        <li className="is-active">
          <a>{today}</a>
        </li>
        <li>
          <a>{next}</a>
        </li>
      </ul>
    </div>
  );
};
