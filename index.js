let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");


let firstCard = rollDice();
let secondCard = rollDice();
let cards = [firstCard, secondCard];

let sum = firstCard + secondCard;

let isAlive = true;
let hasBlackJack = false;

let message = "";
let randomNumber = Math.floor(Math.random() * 6);

function rollDice(){
    let num = Math.floor(Math.random()*6) + 1;
    if(num === 1){
        return 11;
    }else if (num > 10){
        return 10;
    }else{
        return num;
    }
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
    let card = rollDice();
    sum += card;
    cards.push(card) ;
    console.log(cards);
    render();
};

