let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");


let firstCard = 10;
let secondCard = 11;
cardEl.textContent += firstCard;
cardEl.textContent += secondCard;

let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackJack = false;

let message = "";

function start(){
   render(); 
};

function render(){
    cardEl.textContent = "cards: " + firstCard+ " "+ secondCard;
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
    console.log();
    sum += card + 6;
    render()
};

