
console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;
cardOne = cards[0];
cardsInPlay.push (cardOne);
console.log("User flipped " + cards[1]);
var cardTwo;
cardTwo = cards[2];
cardsInPlay.push (cardTwo);
console.log("User flipped " + cardOne + " and " + cardTwo);
if (cardsInPlay.length === 2) {
console.log("You have flipped 2 cards");
}
if (cardsInPlay[0] === cardsInPlay [1]) {alert("You found a match!");
} 
else {alert("No match try again");
}

