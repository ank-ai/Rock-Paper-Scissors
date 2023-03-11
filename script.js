
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

        function playRound(playerSelection, computerSelection) {

            playerSelection = playerSelection.toUpperCase();

            if (playerSelection === "PAPER") {
                switch (computerSelection) {
                    case "ROCK":
                        return 1 //"You Win! Paper beats Rock."
                        break;
                    case "SCISSOR":
                        return -1//"Yout Lose! Scissor beats Paper."
                        break;
                    default:
                        return 0//"It's a tie!";
                }
            }

            if (playerSelection === "ROCK") {
                switch (computerSelection) {
                    case "PAPER":
                        return -1//"You Lose! Paper beats Rock."
                        break;
                    case "SCISSOR":
                        return 1//"Yout Win! Rock beats Scissor."
                        break;
                    default:
                        return 0//"It's a tie!";
                }
            }

            if (playerSelection === "SCISSOR") {
                switch (computerSelection) {
                    case "ROCK":
                        return -1//"You Lose! Rock beats Scissor."
                        break;
                    case "PAPER":
                        return 1//"Yout Win! Scissor beats Paper."
                        break;
                    default:
                        return 0//"It's a tie!";
                }
            }
        }

        function game() {
            let playerScore = 0;
            let computerScore = 0;
            for (let i = 0; i < 5; i++) {
                let playerSelection = prompt(`Round ${i+1}. What is your pick?`)
                let computerChoice = getComputerChoice();
                winner = evaluateWinner(playRound(playerSelection, computerChoice), playerSelection, computerChoice);
                console.log(`Computer chose: ${computerChoice}!`)
                console.log(winner);
                if(winner===`You Win! ${playerSelection} beats ${computerChoice}.`){
                    playerScore++;
                  
                    console.log(`Player Score: ${playerScore} vs Computer Score: ${computerScore}.`)
                }else if(winner===`You Lose! ${computerChoice} beats ${playerSelection}.`){
                    computerScore++;
                    
                    console.log(`Player Score: ${playerScore} vs Computer Score: ${computerScore}.`)
                }else{
                  
                    console.log(`Player Score: ${playerScore} vs Computer Score: ${computerScore}.`)
                }
            }
        }

            function evaluateWinner(number, playerSelection, computerSelection) {
                if (number === 0) {
                    return `It's a tie!`
                } else if (number === 1) {
                    return `You Win! ${playerSelection} beats ${computerSelection}.`
                } else {
                    return `You Lose! ${computerSelection} beats ${playerSelection}.`
                }
            }


            // const playerSelection = "rock";
            //  const computerSelection = getComputerChoice();

            //  console.log(playRound(playerSelection, computerSelection));

            game();

