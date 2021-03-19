
function computerPlay() {
    let play = random();
        if (play === 0) {
            compterDecision = 'Rock';
        } else if (play === 1) {
            compterDecision = 'Paper';
        } else {
            compterDecision = 'Scissors';
        }
    console.log(compterDecision);
    computerChoice = compterDecision;
}

function random() {
   return Math.floor(Math.random() * 3);
}

function playGame() {
    computerPlay();
    if (playerChoice == 'Rock' && computerChoice == 'Rock') {
        result = 'It\'s a tie!';
    } else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        result = 'You lost!';
        computerScore += 1;
    } else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        result = 'You win!';
        playerScore += 1;
    } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        result = 'You win!';
        playerScore += 1;
    } else if (playerChoice == 'Paper' && computerChoice == 'Paper') {
        result = 'It\'s a tie!';
    } else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        result = 'You lost!';
        computerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        result = 'You lost!';
        computerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        result = 'You win!';
        playerScore += 1;
    } else if (playerChoice == 'Scissors' && computerChoice == 'Scissors') {
        result = 'It\'s a tie';
    }

    scoreUpdate();
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
    resetButtonButton = document.getElementById('resetButton');

    testButton =  resetButtonButton.onclick = function() {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('playerScore').innerHTML = `Player Score: ${playerScore}`;
        document.getElementById('computerScore').innerHTML = `Computer Score: ${computerScore}`;
        document.getElementById('winMessage').innerHTML = ``;
        document.getElementById('resetButtonDiv').innerHTML = `<span id="resetButton"></span>`;
    }
}

let choiceButtonRock = document.getElementById('isRock');
let choiceButtonPaper = document.getElementById('isPaper');
let choiceButtonScissors = document.getElementById('isScissors');
let executePlayGame = document.getElementsByTagName('button');
let resetButton = document.getElementById('resetButton');
let resetButtonButton;

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

let testButton;

for (i = 0; i < 10; i++) {
    computerPlay();
}