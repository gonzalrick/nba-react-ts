import React, { Component } from 'react';
import { Router } from '@reach/router';

import './App.scss';
import { Navigation, Schedule } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router>
          <Schedule path="/" default/>
        </Router>
      </div>
    );
  }
}

export default App;
