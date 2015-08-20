import React, { Component } from 'react';
import Card from 'components/Card';

export default class Game extends Component {
  mixins: [TimerMixin]

  constructor(props) {
    super(props);

    this.locked = false;

    this.state = {
      cards: this.generateCards(8)
    }
  }

  generateCards(pairs) {
    var cards = [];
    for (let i = 0; i <= pairs; i++) {
      cards.push({
        value: i,
        status: 'hidden'
      });
      cards.push({
        value: i,
        status: 'hidden'
      });
    }
    return cards;
  }

  onCardClick(index) {
    if (this.locked) { return; }

    var card = this.state.cards[index];
    card.status = "revealed";

    this.checkMatches();

    this.forceUpdate();
  }

  checkMatches() {
    var revealedCards = this.filterCards("revealed");
    if (revealedCards.length == 2) {
      if (revealedCards[0].value == revealedCards[1].value) {
        revealedCards.forEach((element) => {
          element.status = "matched";
        });
      } else {
        this.locked = true;
        window.setTimeout(() => {

          revealedCards.forEach((element) => {
            element.status = "hidden";
          });

          this.locked = false;
          this.forceUpdate();
        }, 500);
      }

    }

    return false;
  }

  pause() {

  }

  filterCards(status) {
    return this.state.cards.filter((card, index) => {
      return card.status == status
    });
  }

  renderCards(cardVals) {
    return cardVals.map((card, index) => {
      return (
        <Card key={index}
           onclick={this.onCardClick.bind(this, index)}
           value={card.value}
           status={card.status}
           flipped={false} />
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderCards(this.state.cards)}
      </div>
    );
  }
}

