
console.log("Up and running!");
var cards = [ 
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png" 
	},
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
	];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		console.log("You found a match!");
	} else {
		console.log("No match try again");
	}
	}
};
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2){
		checkForMatch();
	}
};
function createBoard() {
  var game = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
    var new_card = document.createElement('img');
    new_card.setAttribute('src', 'images/back.png');
    new_card.setAttribute('data-id', i);
    new_card.addEventListener('click', flipCard);
    game.appendChild(new_card);
  }
};
createBoard();
	
