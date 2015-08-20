import React, { Component } from 'react'
import Game from 'components/Game';

require('assets/app.scss');

export default class App extends Component {
  render() {
    var numPairs = 4;

    return (
      <div>
        <Game pairs={numPairs} />
      </div>
    );
  }
}

