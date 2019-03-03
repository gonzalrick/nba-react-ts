
import { Router } from '@reach/router';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import './App.scss';
import { Game, Navigation, Schedule } from './components';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
debugger;
const client = new ApolloClient({
  link: new HttpLink({
    uri: `${API_URL}/graphql`,
  }),
  cache: new InMemoryCache(),
});

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Navigation />
          <Router>
            <Schedule path="/" default />
            <Game path="game/:date/:gameId" />
          </Router>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
