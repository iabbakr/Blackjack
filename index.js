let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");


let firstCard = getRandom();
let secondCard = getRandom();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackJack = false;

let message = "";
let randomNumber = Math.random();

function getRandom(){
    return randomNumber;
};

function start(){
   render();  
};

function render(){
    cardEl.textContent = "cards: ";
    for(let i = 0; i<=cards.length; i++){
        cardEl.textContent += cards[i] + " "; 
    };
    sumEl.textContent = "Sum: "+sum;
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
    let card = getRandom();
    sum += card;
    cards.push(card) ;
    console.log(cards);
    render();
};

