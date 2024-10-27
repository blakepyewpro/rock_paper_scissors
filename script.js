let playerScore = 0;
let cpuScore = 0;
let roundsPlayed = 0;
let gameActive = false;

const rockImg = "assets/rock-drac.png";
const paperImg = "assets/paper-drac.png";
const scissorsImg = "assets/scissors-drac.png";

const playerScoreSpan = document.querySelector("#player-score");
const cpuScoreSpan = document.querySelector("#cpu-score");
const resultTextDiv = document.querySelector("#result-text");
const resultIconsDiv = document.querySelector("#result-icons");
const playerImg = document.querySelector("#player-img");
const cpuImg = document.querySelector("#cpu-img");

const controlBtn = document.querySelector(".control");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

controlBtn.addEventListener("click", controlBtnPressed);
rockBtn.addEventListener("click", () => playRound("rock", getCpuChoice()));
paperBtn.addEventListener("click", () => {
    playRound("paper", getCpuChoice());
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getCpuChoice());
});

function controlBtnPressed() {
    if (gameActive == false) {
        startGame();
    } else if (gameActive == true) {
        resetGame();
    }
}

function startGame() {
    gameActive = true;
    resultTextDiv.textContent = "Make your selection...";
    controlBtn.textContent = "Cancel";
    rockBtn.removeAttribute("disabled");
    paperBtn.removeAttribute("disabled");
    scissorsBtn.removeAttribute("disabled");
}

function resetGame() {
    gameActive = false;
    roundsPlayed = 0;
    playerScore = 0;
    cpuScore = 0;
    controlBtn.textContent = "Start";
    resultTextDiv.textContent = "Waiting to start..."
    updateScores();
    rockBtn.setAttribute("disabled", "");
    paperBtn.setAttribute("disabled", "");
    scissorsBtn.setAttribute("disabled", "");
}

function getCpuChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) return "rock";
    else if (choice == 1) return "scissors";
    else if (choice == 2) return "paper";
}

function playRound(playerChoice, cpuChoice) {
    updateImages(playerChoice, cpuChoice);
    roundsPlayed += 1;
    let result;

    if (playerChoice == "rock") {
        if (cpuChoice == "rock") {
            result = "tie";
        } else if (cpuChoice == "paper") {
            result = "lose";
            cpuScore += 1;
        } else if (cpuChoice == "scissors") {
            result = "win";
            playerScore += 1;
        }
    } else if (playerChoice == "paper") {
        if (cpuChoice == "rock") {
            result = "win";
            playerScore += 1;
        } else if (cpuChoice == "paper") {
            result = "tie";
        } else if (cpuChoice == "scissors") {
            result = "lose";
            cpuScore += 1;
        }
    } else if (playerChoice == "scissors") {
        if (cpuChoice == "rock") {
            result = "lose";
            cpuScore += 1;
        } else if (cpuChoice == "paper") {
            result = "win";
            playerScore += 1;
        } else if (cpuChoice == "scissors") {
            result = "tie";
        }
    }

    if (roundsPlayed < 5) {
        updateScores();
        updateResult(result);
    } else {
        updateScores();
        scoreGame();
    }
}

function scoreGame() {
    gameActive = false;
    roundsPlayed = 0;
    controlBtn.textContent = "Start";
    rockBtn.setAttribute("disabled", "");
    paperBtn.setAttribute("disabled", "");
    scissorsBtn.setAttribute("disabled", "");

    if (playerScore > cpuScore) {
        updateResult("You won the game!");
    } else if (cpuScore > playerScore) {
        updateResult("You lost the game...");
    } else {
        updateResult("The game was a tie.");
    }

    playerScore = 0;
    cpuScore = 0;
}

function updateScores() {
    playerScoreSpan.textContent = playerScore;
    cpuScoreSpan.textContent = cpuScore;
}

function updateImages(playerChoice, cpuChoice) {
    if (playerChoice == "rock") {
        playerImg.setAttribute("src", rockImg);
    } else if (playerChoice == "paper") {
        playerImg.setAttribute("src", paperImg);
    } else if (playerChoice == "scissors") {
        playerImg.setAttribute("src", scissorsImg);
    }

    if (cpuChoice == "rock") {
        cpuImg.setAttribute("src", rockImg);
    } else if (cpuChoice == "paper") {
        cpuImg.setAttribute("src", paperImg);
    } else if (cpuChoice == "scissors") {
        cpuImg.setAttribute("src", scissorsImg)
    }
}

function updateResult(result) {
    if (result == "tie") {
        resultTextDiv.textContent = "That round was a tie."
    } else if (result == "win") {
        resultTextDiv.textContent = "You won that round!"
    } else if (result == "lose") {
        resultTextDiv.textContent = "You lost that round..."
    } else {
        resultTextDiv.textContent = result;
    }
}