let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");


let firstCard = 2;
let secondCard = 4;
cardEl.textContent += firstCard;
cardEl.textContent += secondCard;

let sum = firstCard + secondCard;
sumEl.textContent += sum;

let isAlive = true;
let hasBlackJack = false;

let message = "";

function start(){
    sumEl.textContent += sum;
    if (sum <= 20){
        message = "Do you want to draw a new card?";
        messageEl.textContent += message;
        
    }else if (sum === 21){
        message = "Yes! ";
        hasBlackJack = true;
        messageEl.textContent += message;
    }else {
        message = "You are out of the game";
        isAlive = false;
        messageEl.textContent += message;
    };

};
function card(){

};

