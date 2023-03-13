function getComputerChoice() {

    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "ROCK"
    } else if (randomNumber <= 0.66) {
        return "PAPER"
    } else {
        return "SCISSOR"
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toUpperCase();

    if (playerChoice === "ROCK") {
        switch (computerChoice) {
            case "PAPER":

                return -1
            case "SCISSOR":

                return 1
            default:

                return 0
        }
    }

    if (playerChoice === "PAPER") {
        switch (computerChoice) {
            case "SCISSOR":

                return -1
            case "ROCK":

                return 1
            default:

                return 0
        }
    }

    if (playerChoice === "SCISSOR") {
        switch (computerChoice) {
            case "ROCK":

                return -1
            case "PAPER":

                return 1
            default:
                return 0
        }
    }
}



const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorButton = document.createElement("button");
rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorButton.textContent = "SCISSOR";
const bod = document.querySelector("body");
bod.appendChild(rockButton);
bod.appendChild(paperButton);
bod.appendChild(scissorButton);


function doSth() {
    alert("I'm doing something :)");
}

function doAnotherThing(number) {
    alert(number);
}

function runRock() {
    const playerChoice = "ROCK";
    const computerChoice = getComputerChoice()
    resultNumber = playRound(playerChoice, computerChoice);
    result.textContent = evaluateNumber(playerChoice, computerChoice, resultNumber);
    scoreDisplay.textContent = updateScore();
}

function runPaper() {
    const playerChoice = "PAPER"
    const computerChoice = getComputerChoice();
    resultNumber = playRound(playerChoice, computerChoice);
    result.textContent = evaluateNumber(playerChoice, computerChoice, resultNumber);
    scoreDisplay.textContent = updateScore();
}

function runScissor() {
    const playerChoice = "SCISSOR";
    const computerChoice = getComputerChoice()
    resultNumber = playRound(playerChoice, computerChoice);
    result.textContent = evaluateNumber(playerChoice, computerChoice, resultNumber);
    scoreDisplay.textContent = updateScore();
}



rockButton.addEventListener('click', runRock);
paperButton.addEventListener("click", runPaper);
scissorButton.addEventListener("click", runScissor);

const result = document.querySelector(".result");

const scoreDisplay = document.createElement('div');

bod.appendChild(scoreDisplay);

function evaluateNumber(playerChoice, computerChoice, number) {

    
    if (number === 0) {
        return `You chose: ${playerChoice}, Computer chose: ${computerChoice}.  It's a Tie!`
    } else if (number === 1) {
        playerScore++;

        if(playerScore===5){ return "Player Wins!"}

        return `You chose: ${playerChoice}, Computer chose: ${computerChoice}.  You Win!`
    } else {

        computerScore++;
        if(computerScore===5){   return "Computer Wins!" }
     
        return `You chose: ${playerChoice}, Computer chose: ${computerChoice}.  You Lose!`
    }
}

function updateScore() {
    if((playerScore <5) || (computerScore <5)){ return `Player score: ${playerScore}  Computer score: ${computerScore}.`}
    //otherwise

  //  if(playerScore>5){
     //   result.textContent="Player Wins!"
   //     return`Final score: ${playerScore} to ${computerScore}.`

   //  }else{

   //     result.textContent="Computer Wins!"
   //     return`Final score: ${computerScore} to ${playerScore} .`
   //  }
    

}


let playerScore = 0;
let computerScore = 0;

//display round




