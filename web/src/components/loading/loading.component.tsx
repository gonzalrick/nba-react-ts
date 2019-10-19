import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loading = () => (
  <ContentLoader
    height={117}
    width={500}
    speed={1}
    primaryColor="#d8d8d8"
    secondaryColor="#535353"
  >
    <circle cx="75" cy="22" r="15" />
    <circle cx="75" cy="72" r="15" />
    <rect x="116" y="15" rx="0" ry="0" width="196" height="10" />
    <rect x="385" y="15" rx="0" ry="0" width="35" height="10" />
    <rect x="116" y="65" rx="0" ry="0" width="196" height="10" />
    <rect x="385" y="65" rx="0" ry="0" width="35" height="10" />
    <rect x="459" y="40" rx="0" ry="0" width="35" height="10" />
    <rect x="47" y="100" rx="0" ry="0" width="429" height="2" />
  </ContentLoader>
);
