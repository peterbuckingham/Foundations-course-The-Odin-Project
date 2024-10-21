console.log("Hello World"); // Test if JavaScript is linked correctly

// Function to get the computer's choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3); // Random number between 0 and 2

    // Return "rock", "paper", or "scissors" based on the random number
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "scissors";
    } else {
        return "paper";
    }
}

// Function to get the human's choice
function getHumanChoice() {
    let userChoice = prompt("Please Choose: Rock, Paper, or Scissors").toLowerCase(); // Get user input

    // Validate and return the user's choice
    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
    } else {
        console.log("Invalid choice, please type again.");
        return getHumanChoice(); // Ask again if input is invalid
    }
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Convert human choice to lowercase to make it case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Log choices
    console.log(`You chose: ${humanChoice}, Computer chose: ${computerChoice}`);

    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }

    // Log the current score
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}


// Function to play the entire game
function playGame() {
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice(); // Get human choice
        const computerChoice = getComputerChoice(); // Get computer choice
        playRound(humanChoice, computerChoice); // Play a round
    }

    // Declare the overall winner
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


