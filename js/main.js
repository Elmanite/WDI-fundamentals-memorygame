
console.log("Up and running!");
var cards = [ 
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "mages/queen-of-hears.png" 
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
}
checkForMatch();
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	flipCard();
	flipCard(0);
	flipCard(2);

}

	
