const button = document.querySelector("button");
const player1Dice = document.querySelector("#player1-dice");
const player2Dice = document.querySelector("#player2-dice");
const message = document.querySelector("#message");

button.addEventListener("click", (e) => {
    const links = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png", ];
    const randomNumber1 = Math.floor(Math.random() * 6);
    const randomNumber2 = Math.floor(Math.random() * 6);

    player1Dice.src = links[randomNumber1];
    player2Dice.src = links[randomNumber2];

    function showMessage() {
        message.style.display = "block";
    }

    if(randomNumber1 > randomNumber2) {
        showMessage();
        message.innerText = "Player 1 Wins!";
    }
    else if(randomNumber1 === randomNumber2) {
        showMessage();
        message.innerText = "Match Tie";
    }
    else if(randomNumber2 > randomNumber1) {
        showMessage();
        message.innerText = "Player 2 Wins!";
    }
}); 