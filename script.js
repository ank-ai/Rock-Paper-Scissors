// index elements 
const body = document.querySelector("body");
const state = document.querySelector(".state");
const score = document.querySelector(".score");
const options = document.querySelector(".options");

//game varibales
let playerScore = 0;
let computerScore = 0;
let round = 1;
let isHomestate = true;     //vanity
let isGameOver = false;
let goToHome = false;
let blinkSwitch = false;

//game buttons
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";

//buttons eventlisteners break enter logic?

//rockButton.addEventListener('click', runRock);
//paperButton.addEventListener("click", runPaper);
//scissorButton.addEventListener("click", runScissor);

//game logic
function getComputerChoice() {

    let randomNumber = Math.random();
    if (randomNumber <= 0.33) {
        return "rock"
    } else if (randomNumber <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toUpperCase();

    if (playerChoice === "ROCK") {
        switch (computerChoice) {
            case "paper":

                return -1
            case "scissors":

                return 1
            default:

                return 0
        }
    }

    if (playerChoice === "PAPER") {
        switch (computerChoice) {
            case "scissors":

                return -1
            case "rock":

                return 1
            default:

                return 0
        }
    }

    if (playerChoice === "SCISSORS") {
        switch (computerChoice) {
            case "rock":

                return -1
            case "paper":

                return 1
            default:
                return 0
        }
    }
}


function runRock() {
    const playerChoice = "ROCK"
    const computerChoice = getComputerChoice();
    resultNumber = playRound(playerChoice, computerChoice);     //0,1,-1
    const winnerMessage = evaluateNumber(computerChoice, resultNumber);        //string who won and increment player score
    displayRoundwinner(winnerMessage, updateScore());
}



function runPaper() {
    const playerChoice = "PAPER"
    const computerChoice = getComputerChoice();
    resultNumber = playRound(playerChoice, computerChoice);     //0,1,-1
    const winnerMessage = evaluateNumber(computerChoice, resultNumber);        //string who won and increment player score
    displayRoundwinner(winnerMessage, updateScore());
}

function runScissor() {
  
    const playerChoice = "SCISSORs"
    const computerChoice = getComputerChoice();
    resultNumber = playRound(playerChoice, computerChoice);     //0,1,-1
    const winnerMessage = evaluateNumber( computerChoice, resultNumber);        //string who won and increment player score
    displayRoundwinner(winnerMessage, updateScore());
}



function evaluateNumber(computerChoice, number) {


    if (number === 0) {
        return `computer chose: ${computerChoice}</br></br> It's a Tie!`
    } else if (number === 1) {
        playerScore++;

       // if (playerScore === 5) { return "Player Wins!" }

        return `computer chose: ${computerChoice}</br></br> You Win!`
    } else {

        computerScore++;
        //if (computerScore === 5) { return "Computer Wins!" }
        // if (playerScore === 5) { return "Player Wins!" }

        return `computer chose: ${computerChoice}</br></br> You Lose!`
    }
}

function updateScore() {
    //deleted condition:  if ((playerScore < 5) || (computerScore < 5)) 
    return `Player score: ${playerScore} </br>Computer score: ${computerScore}` 
}



function displayGamestate() {
    if(isHomestate){score.classList.toggle("blink");}       //vanity
    isHomestate=false;                                  //vanity
    state.textContent = `Round: ${round}`;
    score.textContent = "choose your weapon";
    options.appendChild(rockButton);
    options.appendChild(paperButton);
    options.appendChild(scissorsButton);
    rockButton.addEventListener('click', runRock);
    paperButton.addEventListener("click", runPaper);
    scissorsButton.addEventListener("click", runScissor);
    if (round>1){options.classList.toggle("blink")}
}

function displayRoundwinner(string1, string2) {
    if(computerScore==5 || playerScore ==5){isGameOver=true;
        displayEndstate();
        return;
    }
    state.innerHTML = string1;
    score.innerHTML = string2;

    options.removeChild(rockButton);
    options.textContent= "press enter for next round"
    round++;

   
   options.classList.toggle("blink")


   
}



function displayEndstate() {
    if(computerScore===5){ 
         state.textContent = "Computer wins.";
    }else{
        state.textContent = "Player wins.";
    }
    score.innerHTML =`final score:</br> ${playerScore} to ${computerScore}`
    options.innerHTML = `press ENTER to play again`;

    resetValues();
}

function resetValues(){
playerScore = 0;
computerScore = 0;
round = 1;
isHomestate = true;
isGameOver = false;
goToHome = false;
}

body.addEventListener("keypress", function (e) {   
   
    if (e.keyCode === 13) {
        options.textContent="";
        //if(blinkSwitch==flase){options.classList.toggle("blink")}
       // options.classList.toggle("blink")
    
       displayGamestate();                 
    }
})

    


