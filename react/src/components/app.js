import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>randomize.co</h2>
        <div>{ this.props.children }</div>
      </div>
    );
  }
}
