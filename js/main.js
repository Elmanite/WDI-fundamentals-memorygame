
console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay [1]) {
		console.log("You found a match!");
	} else {
		console.log("No match try again");
	}
}
checkForMatch();
var flipCard = function (cardId) {
	console.log("User flipped " + cards[CardId]);
	cardsInPlay.push(cards[cardId]);
flipCard();
flipCard(0);
flipCard(2);

}

	
