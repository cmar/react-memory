import React, { Component } from 'react';
import classnames from 'classnames';

export default class Card extends Component {

  render() {
    var cardClass = 'Card Card--' + this.props.status;
    return (
      <div
        className={cardClass}
        onClick={this.props.onclick}>
        {this.props.value}
      </div>
    );
  }
}

