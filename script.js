//1 == Rock, 2 == Paper, 3 == Scissors

function playGame() {
    //TODO
}

function playRound(){
    //TODO
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

function getPlayerChoice() {
    let input = prompt(`Please enter "rock", "paper", or "scissors`);
    switch(input) {
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
        default:
            getPlayerChoice();
    }
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice == 1) {
        if (computerChoice == 1) {
            return "tie";
        } else if (computerChoice == 2) {
            return "computer";
        } else if (computerChoice == 3) {
            return "player";
        }
    } else if (playerChoice == 2) {
        if (computerChoice == 1) {
            return "player";
        } else if (computerChoice == 2) {
            return "tie";
        } else if (computerChoice == 3) {
            return "computer";
        }
    } else if (playerChoice == 3) {
        if (computerChoice == 1) {
            return "computer";
        } else if (computerChoice == 2) {
            return "player";
        } else if (computerChoice == 3) {
            return "tie";
        }
    }
}