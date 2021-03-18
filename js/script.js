
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

let choiceButtonRock = document.getElementById('isRock');
let choiceButtonPaper = document.getElementById('isPaper');
let choiceButtonScissors = document.getElementById('isScissors');
let playerChoice = '';

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