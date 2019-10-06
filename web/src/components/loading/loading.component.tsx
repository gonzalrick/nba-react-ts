import React, { Component } from 'react';
import { Facebook } from 'react-content-loader';

export class Loading extends Component {
  render() {
    return <Facebook speed={1} primaryColor={'#333'} secondaryColor={'#999'} />;
  }
}
