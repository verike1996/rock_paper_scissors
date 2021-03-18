
function computerPlay() {
    let play = random();
        if (play === 0) {
            compterDecision = "Rock";
        } else if (play === 1) {
            compterDecision = "Paper";
        } else {
            compterDecision = "Scissors";
        }
    console.log(compterDecision);
}


function random() {
   return Math.floor(Math.random() * 3);
}

for (i = 0; i < 10; i++) {
    computerPlay();
}