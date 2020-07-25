import { Router } from '@reach/router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React, { FC } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.scss';
import { Navbar, Schedule } from './bulma-components';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';
const client = new ApolloClient({
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Navbar />
        {/* <Router> */}
        <Schedule />
        {/* </Router> */}
      </ApolloProvider>
    </div>
  );
};

export default App;
