function random() {
    return Math.floor(Math.random() * 1000);
 }

function computerPlay() {
    let play = random();
        if (play % 3 === 0) {
            compterDecision = 'Rock';
        } else if (play % 3 === 1) {
            compterDecision = 'Paper';
        } else {
            compterDecision = 'Scissors';
        }
    console.log(compterDecision);
    computerChoice = compterDecision;
}

function playGame() {
    computerPlay();
    if (playerChoice == 'Rock' && computerChoice == 'Rock') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! It's a tie!`;
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! You lost!`;
        computerScore += 1;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! You win!`;
        playerScore += 1;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! You win!`;
        playerScore += 1;
    } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! It's a tie!`;
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! You lost!`;
        computerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! You lost!`;
        computerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! You win!`;
        playerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
        result = `You played ${playerChoice} and the computer played ${computerChoice}! It's a tie!`;
    }

    scoreUpdate();
    if (computerScore === 5 || playerScore === 5) {
        result = 'The game is over!'
        document.getElementById('scoreUpdateMessage').innerHTML = result;
    } else {
        document.getElementById('scoreUpdateMessage').innerHTML = result;
    }
}

function scoreUpdate() {
    if (playerScore < 5 && computerScore < 5) {
        document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
        document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
    } else if (playerScore >= 5) {
        document.getElementById('winMessage').innerHTML = `Congratulations! You win!`;
        document.getElementById('playerScore').innerHTML = `Player Score: 5`;
        document.getElementById('resetButtonDiv').innerHTML = `<button id="resetButton">Reset</button>`;
        return;
    } else if (computerScore >= 5) {
        document.getElementById('winMessage').innerHTML = `The Computer wins. Better luck next time!`;
        document.getElementById('computerScore').innerHTML = `Computer Score: 5`;
        document.getElementById('resetButtonDiv').innerHTML = `<button id="resetButton">Reset</button>`;
        return;
    }
}

let choiceButtonRock = document.getElementById('isRock');
let choiceButtonPaper = document.getElementById('isPaper');
let choiceButtonScissors = document.getElementById('isScissors');
let executePlayGame = document.getElementsByTagName('button');
let resetButton = document.getElementById('resetButton');
let resetButtonButton;
let scoreUpdateMessage;

let playerScoreHTML = document.getElementById('playerScore');
let computerScoreHTML = document.getElementById('computerScore');
let winMessage = document.getElementById('winMessage');

let playerChoice;
let result;
let computerChoice;

let computerScore = 0;
let playerScore = 0;

choiceButtonRock.onclick = function() {
    playerChoice = 'Rock';
    playGame();
}

choiceButtonPaper.onclick = function() {
    playerChoice = 'Paper';
    playGame();
}

choiceButtonScissors.onclick = function() {
    playerChoice = 'Scissors';
    playGame();
}


for (i = 0; i < 10; i++) {
    computerPlay();
}