START

PRINT "Hello World"

// Function to get computer choice
FUNCTION getComputerChoice:
    randomNum = RANDOM(0, 2)
    IF randomNum == 0 THEN RETURN "rock"
    ELSE IF randomNum == 1 THEN RETURN "scissors"
    ELSE RETURN "paper"
END FUNCTION

// Function to get human choice
FUNCTION getHumanChoice:
    userChoice = PROMPT("Choose: Rock, Paper, Scissors").toLowerCase()
    IF userChoice IN ["rock", "paper", "scissors"] THEN RETURN userChoice
    PRINT "Invalid choice. Try again."
    RETURN getHumanChoice()
END FUNCTION

// Initialize scores
humanScore = 0
computerScore = 0

// Function to play a round
FUNCTION playRound(humanChoice, computerChoice):
    PRINT "You chose:", humanChoice, "Computer chose:", computerChoice
    IF humanChoice == computerChoice THEN PRINT "It's a tie!"
    ELSE IF (humanChoice == "rock" AND computerChoice == "scissors") OR 
             (humanChoice == "paper" AND computerChoice == "rock") OR 
             (humanChoice == "scissors" AND computerChoice == "paper") THEN
        PRINT "You win!"
        humanScore++
    ELSE
        PRINT "You lose!"
        computerScore++
    PRINT "Score - You:", humanScore, "Computer:", computerScore
END FUNCTION

// Function to play the game
FUNCTION playGame:
    FOR i FROM 1 TO 5 DO
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    END FOR

    IF humanScore > computerScore THEN PRINT "You win overall!"
    ELSE IF computerScore > humanScore THEN PRINT "Computer wins overall!"
    ELSE PRINT "Game is a tie!"
END FUNCTION

// Start the game
playGame()

END
