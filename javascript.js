
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]; 
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}



let playerScore = 0;
let computerScore = 0;

//Plays round with the player's choice and the computer's choice.
function playRound(playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    let computerInput = computerSelection.toLowerCase(); //Make player selection and computer selection lowercase to compare them.
    const result = document.querySelector('#result');

    if (playerInput === computerInput) { //If player selection and computer selection are the same, it's a tie.
        //console.log("It's a tie! Player score = " + playerScore + " Computer score =  " + computerScore);

        result.textContent = "It's a tie! Player score = " + playerScore + " Computer score =  " + computerScore;
    } else if (
        (playerInput == "rock" && computerInput == "paper") || 
        (playerInput == "paper" && computerInput == "scissors") || 
        (playerInput == "scissors" && computerInput == "rock")) { //Describes all conditions in which the player loses.
            computerScore++;
            //console.log("You lose! " + computerSelection + " wins from " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + "! Player score = " + playerScore + " Computer score = " + computerScore);
            result.textContent = "You lose! " + computerSelection + " wins from " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + "! Player score = " + playerScore + " Computer score = " + computerScore;
    } else { //Otherwise the player wins.
        playerScore++;
        //console.log("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " wins from " + computerSelection + "! Player score = " + playerScore + " Computer score = " + computerScore);
        result.textContent = "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " wins from " + computerSelection + "! Player score = " + playerScore + " Computer score = " + computerScore
    }

    if (playerScore === 5 || computerScore === 5) {
        document.getElementById("btnRock").removeEventListener("click", playRock);
        document.getElementById("btnPaper").removeEventListener("click", playPaper);
        document.getElementById("btnScissors").removeEventListener("click", playScissors);
        if (playerScore === 5) {
            result.textContent = "You win the game! Player score = " + playerScore + " Computer score = " + computerScore; 
        } else if (computerScore === 5) {
            result.textContent = "You lose the game! Player score = " + playerScore + " Computer score = " + computerScore;
        }
    }

}

function playRock () {
    playRound("rock", getComputerChoice());
}

function playPaper () {
    playRound("paper", getComputerChoice());
}

function playScissors () {
    playRound("scissors", getComputerChoice());
}


document.getElementById("btnRock").addEventListener("click", playRock);
document.getElementById("btnPaper").addEventListener("click", playPaper);
document.getElementById("btnScissors").addEventListener("click", playScissors);
    
