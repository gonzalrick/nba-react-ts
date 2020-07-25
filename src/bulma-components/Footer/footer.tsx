import React, { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="footer py-1">
      <div className="content has-text-centered is-size-7">
        <div>
          Logo made by{' '}
          <a href="https://www.flaticon.com/authors/surang" title="surang">
            surang
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
};
