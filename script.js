let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

const playerScoreSpan = document.querySelector("#player-score");
const cpuScoreSpan = document.querySelector("#cpu-score");
const resultTextDiv = document.querySelector("#result-text");
const resultIconsDiv = document.querySelector("#result-icons");

function playGame() {
    while (roundsPlayed < 5) {
        playRound();
    }
    getGameWinner();
}

function playRound(){
    const computerChoice = getComputerChoice();
    console.log("computer has chosen");
    const playerChoice = getPlayerChoice();
    console.log("player has chosen");
    const result = getRoundWinner(playerChoice, computerChoice);
    console.log("round winner determined");

    scoreRound(result, playerChoice, computerChoice);
}

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "scissors";
    else if (choice == 2) return "paper";
}

function getPlayerChoice() {
    let input = prompt(`Please enter "rock", "paper", or "scissors"`);
    input = input.toLowerCase();
    switch(input) {
        case "rock":
            console.log(`${input} selected`);
            return input;
        case "paper":
            console.log(`${input} selected`);
            return input;
        case "scissors":
            console.log(`${input} selected`);
            return input;
        default:
            console.log(`${input} selected`);
            getPlayerChoice();
    }
}

function getRoundWinner(playerChoice, computerChoice) {
    if (playerChoice == "rock") {
        if (computerChoice == "rock") {
            return "tie";
        } else if (computerChoice == "paper") {
            return "computer";
        } else if (computerChoice == "scissors") {
            return "player";
        }
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return "player";
        } else if (computerChoice == "paper") {
            return "tie";
        } else if (computerChoice == 3) {
            return "computer";
        }
    } else if (playerChoice == "scissors") {
        if (computerChoice == "rock") {
            return "computer";
        } else if (computerChoice == "paper") {
            return "player";
        } else if (computerChoice == "scissors") {
            return "tie";
        }
    }
}

function scoreRound (result, playerChoice, computerChoice) {
    if (result == "player"){
        console.log("player won a round");
        playerScore +=1;
        roundsPlayed +=1;
        alert(`You won the round!\n${playerChoice} beats ${computerChoice}`);
    } else if (result == "computer") {
        console.log("computer won a round");
        computerScore += 1;
        roundsPlayed +=1;
        alert(`You lost the round...\n${playerChoice} loses to ${computerChoice}`);
    } else if (result == "tie") {
        console.log("tied round")
        roundsPlayed +=1;
        alert(`That round was a tie.`);
    }
}

function getGameWinner() {
    if (playerScore > computerScore) {
        alert(`You won the game!\nYou: ${playerScore} Computer: ${computerScore}`);
    } else if (playerScore < computerScore) {
        alert(`You lost the game...\nYou: ${playerScore} Computer: ${computerScore}`);
    } else {
        alert(`The game was a tie.\n You: ${playerScore} Computer: ${computerScore}`)
    }
}