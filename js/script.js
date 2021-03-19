
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
}

function random() {
   return Math.floor(Math.random() * 3);
}

function playGame() {
    switch (playerChoice, computerChoice) {
        case 'Rock', 'Rock':
            result = 'It\'s a tie!';
            break;
        case 'Rock', 'Paper':
            result = 'You lost!';
            computerScore += 1;
            break;
        case 'Rock', 'Scissors':
            result = 'You win!';
            playerScore += 1;
            break;
        case 'Paper', 'Rock':
            result = 'You win!';
            playerScore += 1;
            break;
        case 'Paper', 'Paper':
            result = 'It\'s a tie!';
            break;
        case 'Paper', 'Scissors':
            result = 'You lost!';
            computerScore += 1;
            break;
        case 'Scissors', 'Rock':
            result = 'You lost!';
            computerScore += 1;
            break;
        case 'Scissors', 'Paper':
            result = 'You win!';
            playerScore += 1;
            break;
        case 'Scissors', 'Scissors':
            result = 'It\'s a tie';
            break;
    }
    console.log(result);
}

let choiceButtonRock = document.getElementById('isRock');
let choiceButtonPaper = document.getElementById('isPaper');
let choiceButtonScissors = document.getElementById('isScissors');
let playerChoice = '';
let result;
let computerChoice = 'Rock';
let computerScore = 0;
let playerScore = 0;

choiceButtonRock.onclick = function() {
    playerChoice = 'Rock';
}

choiceButtonPaper.onclick = function() {
    playerChoice = 'Paper';
}

choiceButtonScissors.onclick = function() {
    playerChoice = 'Scissors';
}

for (i = 0; i < 10; i++) {
    computerPlay();
}