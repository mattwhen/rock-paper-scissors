

const rps = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return rps[~~(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return `The user wins! Player chose Rock`;
    }

    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `The user wins! Player chose Paper`;
    }

    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return `The user wins! Player chose Scissors`;
    }
}




console.log(playRound('Scissors', getComputerChoice()));