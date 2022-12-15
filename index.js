let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");


let firstCard = 2;
let secondCard = 4;

let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackJack = false;

if (sum <= 20){
    console.log("Do you want to draw a new card?");
    
}else if (sum === 21){
    console.log("Yes! ");
    hasBlackJack = true;
}else {
    console.log("You are out of the game");
    isAlive = false;
}