import React from "react";

export default class cardDeck extends React.Component {
  constructor(props) {
    super(props);
    this.deck = [];
    this.reset();
    this.shuffle();
  }

  reset() {
    this.deck = [];

    const suits = ["H", "S", "C", "D"];
    const values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]}${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }
    return this;
  }
}
