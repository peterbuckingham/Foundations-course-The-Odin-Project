// Function that generates a random choice from the computer (Rock, Paper, or Scissors)
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function that asks user for a choice input (Rock, Paper, or Scissors)
function getHumanChoice() {
    let choice = prompt("Please choose: Rock, Paper, or Scissors").toLowerCase();
    return choice;
}

// Function to play the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Round logic
    for (let i = 0; i < 5; i++) { // Loop to play 5 rounds
        const humanSelection = getHumanChoice(); // Get human choice
        const computerSelection = getComputerChoice(); // Get computer choice
        
        // Call playRound for each round
        if (humanSelection === computerSelection) {
            console.log("It's a Tie!");
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "paper" && computerSelection === "rock") ||
            (humanSelection === "scissors" && computerSelection === "paper")
        ) {
            console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
            computerScore++;
        }
        
        // Log current score
        console.log(`Your Score: ${humanScore} | Computer's Score: ${computerScore}`);
    }

    // Declare the overall winner after 5 rounds
    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
playGame();
