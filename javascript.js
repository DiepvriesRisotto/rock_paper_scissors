/*function game() {
    for (let i = 0; i < 5; i++) { //Play round 5 times.
        //Randomly return "Rock", "Paper" or "Scissors".
        function getComputerChoice() {
            const choices = ["Rock", "Paper", "Scissors"]; 
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            return randomChoice;
        }
        //Asks player choice
        const playerSelection = prompt("Please choose rock, paper or scissors.");
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);        
    }    
    if (playerScore === computerScore) {
        return "Tie!";
    } else if (playerScore > computerScore) {
        return "You win the game!" ;
    } else {
        return "The computer wins the game!" ;
    }
}*/

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
}

document.getElementById("btnRock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("btnPaper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("btnScissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));
    
