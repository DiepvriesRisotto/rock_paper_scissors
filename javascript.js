
//Randomly return "Rock", "Paper" or "Scissors".
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]; 
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}
//Asks player choice
const playerSelection = prompt("Please choose rock, paper or scissors.");
const computerSelection = getComputerChoice();

//Plays round with the player's choice and the computer's choice.
function playRound(playerSelection, computerSelection) {
    let playerInput = playerSelection.toLowerCase();
    let computerInput = computerSelection.toLowerCase(); //Make player selection and computer selection lowercase to compare them.

    if (playerInput === computerInput) { //If player selection and computer selection are the same, it's a tie.
        console.log("It's a tie!");
    } else if (
        (playerInput == "rock" && computerInput == "paper") || 
        (playerInput == "paper" && computerInput == "scissors") || 
        (playerInput == "scissors" && computerInput == "rock")) { //Describes all conditions in which the player loses.
            return "You lose! " + computerSelection + " wins from " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();    
    } else { //Otherwise the player wins.
        return "You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() + " wins from " + computerSelection;
    }        
}
    
console.log(playRound(playerSelection, computerSelection));
