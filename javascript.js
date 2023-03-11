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
                console.log(`Computer chose: ${computerChoice}. ${computerChoice} beats ${playerChoice}. You Lose!`)
                return -1
            case "SCISSOR":
                console.log(`Computer chose: ${computerChoice}. ${playerChoice} beats ${computerChoice}. You Win!`)
                return 1
            default:
                console.log(`Computer chose: ${computerChoice}. It's a Tie!`)
                return 0
        }
    }

    if (playerChoice === "PAPER") {
        switch (computerChoice) {
            case "SCISSOR":
                console.log(`Computer chose: ${computerChoice}. ${computerChoice} beats ${playerChoice}. You Lose!`)
                return -1
            case "ROCK":
                console.log(`Computer chose: ${computerChoice}. ${playerChoice} beats ${computerChoice}. You Win!`)
                return 1
            default:
                console.log(`Computer chose: ${computerChoice}. It's a Tie!`)
                return 0
        }
    }

    if (playerChoice === "SCISSOR") {
        switch (computerChoice) {
            case "ROCK":
                console.log(`Computer chose: ${computerChoice}. ${computerChoice} beats ${playerChoice}. You Lose!`)
                return -1
            case "PAPER":
                console.log(`Computer chose: ${computerChoice}. ${playerChoice} beats ${computerChoice}. You Win!`)
                return 1
            default:
                console.log(`Computer chose: ${computerChoice}. It's a Tie!`)
                return 0
        }
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for(let i=1; i<6; i++){
        let playerChoice = prompt(`Round ${i}. Choose your weapon`);
        let winner =  playRound(playerChoice,getComputerChoice());
        switch (winner){
            case -1: computerScore++;
            break;
            case 1: playerScore++;
            break;
            default:
        }
        console.log(`Current Score: You've got ${playerScore}, Computer has ${computerScore}.`)
    }
}

game();

