import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Container, Navbar } from 'reactstrap';

import './navigation.component.scss';

export class Navigation extends Component {
  public render () {
    return (
      <div className="navigation">
        <Container>
          <Navbar className="navbar-dark" style={{backgroundColor: '#4267b2', color: '#fff'}} expand="md">
            <Link to="/" className="navbar-brand">
              NBA
            </Link>
          </Navbar>
        </Container>
      </div>
    );
  }
}
