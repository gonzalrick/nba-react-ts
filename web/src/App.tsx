import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Router } from '@reach/router';

import './App.scss';
import { Loading, Navigation, Schedule, Game } from './components';
import { GeneralStore } from './store';

@inject('generalStore')
@observer
class App extends Component<any> {
  render() {
    const { isLoading }: GeneralStore = this.props.generalStore;
    return (
      <div className="App">
        <Navigation />
        {
          isLoading ?
            <Loading /> :
            <Router>
              <Schedule path="/" default />
              <Game path="game/:date/:gameId" />
            </Router>
        }
      </div>
    );
  }
}

export default App;
