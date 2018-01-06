var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function () {
  var $game = $('#game');
  var gameValues = MatchGame.generateCardValues();
  MatchGame.renderCards(gameValues, $game);
})

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var orderedValues = [];

  for (var i = 1; i <= 8; i++) {
    orderedValues.push(i);
    orderedValues.push(i);
  }

  var cardValues = [];

  while (orderedValues.length > 0) {
    var randomIndex = Math.floor(Math.random() * orderedValues.length);
    var randomValue = orderedValues.splice(randomIndex, 1)[0];
    cardValues.push(randomValue);
  }

  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'
  ];

  $game.empty();
  $game.data('flippedCards', []);

  for (var i = 0; i < cardValues.length; i++) {
    var value = cardValues[i];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };

    var $card = $('<div class="col-xs-3 card"></div>');
    $card.data(data);
    $game.append($card);
  }
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
