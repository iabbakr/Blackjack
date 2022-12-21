let player = {
    name: "abubakar",
    chips: 234
};
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let cardEl = document.getElementById("card-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("#sum-el");
let playerEl = document.getElementById("#player-el");

playerEl.textContent = player.name + ": $" + player.chips;
function rollDice(){
    let num = Math.floor(Math.random()*13) + 1;
    if(num > 10){
        return 10;
    }else if (num === 1){
        return 11;
    }else{
        return num;
    };
};

function start(){
    isAlive = true;
    let firstCard = rollDice();
    let secondCard = rollDice();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
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
        isAlive=true;
        hasBlackJack=false;
        
    }else if (sum === 21){
        message = "Yes! ";
        hasBlackJack = true;
        messageEl.textContent += message;
        isAlive= true;
    }else {
        message = "You are out of the game";
        isAlive = false;
        messageEl.textContent += message;
        hasBlackJack=false;
    };

};
function card(){
    if (isAlive === true && hasBlackJack === true){
        let card = rollDice();
        sum += card;
        cards.push(card) ;
        console.log(cards);
        render();
    };
};
    

