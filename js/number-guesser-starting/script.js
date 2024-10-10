let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
	return Math.floor(Math.random() * 10)
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
	humanGuessResidue = Math.abs(humanGuess - targetNumber);
	computerGuessResidue = Math.abs(computerGuess - targetNumber);
	if (humanGuessResidue < computerGuessResidue) {
		return true // human wins
	} else if ( computerGuessResidue < humanGuessResidue) {
		return false // computer wins
	} else if (humanGuess === targetNumber && computerGuess === targetNumber) {}; {
		return 'its a tie so humans always wins'
	}
}

const updateScore = winner => {
  switch(winner) {
    case 'human':
    humanScore += 1;
    break;
    case 'computer':
    computerScore += 1;
    break;
  }
}

const advanceRound = () => {
	currentRoundNumber += 1;
}