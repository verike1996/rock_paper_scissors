
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
    
    console.log(result);
}

let choiceButtonRock = document.getElementById('isRock');
let choiceButtonPaper = document.getElementById('isPaper');
let choiceButtonScissors = document.getElementById('isScissors');
let executePlayGame = document.getElementsByTagName('button');
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