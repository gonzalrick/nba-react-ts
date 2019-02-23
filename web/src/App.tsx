import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Router } from '@reach/router';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import './App.scss';
import { Loading, Navigation, Schedule, Game } from './components';
import { GeneralStore } from './store';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
  cache: new InMemoryCache(),
});

@inject('generalStore')
@observer
class App extends Component<any> {
  render() {
    const { isLoading }: GeneralStore = this.props.generalStore;
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Navigation />
          {
            isLoading ?
              <Loading /> :
              <Router>
                <Schedule path="/" default />
                <Game path="game/:date/:gameId" />
              </Router>
          }
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
