window.addEventListener('DOMContentLoaded', function() {
  // Model the game
  // create a single deck of playing cards
  // two players (called Sam and the Dealer) who will play against each other
  // each player is given two cards from the top of a shuffled deck of cards
  // Rules to implement
  // determine score of a hand[1]
  // check if either player has blackjack (21) with their initial hand and wins the game
  // if neither player has blackjack then Sam can start drawing cards from the top of the deck
  // Sam should stop drawing cards from the deck if their total reaches 17 or higher
  // Sam has lost the game if their total is higher than 21
  // when Sam has stopped drawing cards the Dealer can start drawing cards from the top of the deck
  // the Dealer should stop drawing cards when their total is higher than Sam.
  // the Dealer has lost the game if their total is higher than 21
  // determine which player wins the game
  // [1] Numbered cards are their point value. Jack, Queen and King count as 10 and Ace counts as 11.

  // Create deck

  // A game has:
  // Dealer, Player, Deck

  // A player / dealer has:
  //
  // scores / cards
  //
  // A score has:
  //
  // current score

  // const deck = [];

  // let deck;

  const suits = ['diamond', 'hearts', 'spades', 'clubs'];

  const values = [
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'jack',
    'queen',
    'king',
    'ace'
  ];

  //create a deck of cards

  function createDeck() {
    deck = new Array();

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        const card = {
          value: values[x],
          suit: suits[i]
        };
        deck.push(card);
      }
    }

    console.log(deck);
  }

  //shuffle the Deck

  function shuffle() {
    // for loop that
    // switch the values of two random cards loads of times
    for (let i = 0; i < 1000; i++) {
      const card1 = Math.floor(Math.random() * deck.length);
      const card2 = Math.floor(Math.random() * deck.length);
      const tmp = deck[card1];

      deck[card1] = deck[card2];
      deck[card2] = tmp;
    }
  }

  createDeck();
});
