let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");


let firstCard = 2;
let secondCard = 4;

let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackJack = false;

let message = "";

function start(){
    if (sum <= 20){
        message = "Do you want to draw a new card?";
        
    }else if (sum === 21){
        message = "Yes! ";
        hasBlackJack = true;
    }else {
        message = "You are out of the game";
        isAlive = false;
    };

};
function card(){

}

console.log("message")