// Returns userInput if userInput is an appropriate choice.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput;
  } return "Error: Input must be 'rock', 'paper', or 'scissors'";
};

// Returns a pseudo random computerChoice.
const getComputerChoice = () => {
  const randNum = Math.floor(Math.random() * 3);
  switch(randNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Error in Function getComputerChoice()')
  }
};

// Checks userChoice against computerChoice to determine a winner.
const determineWinner = (userChoice, ComputerChoice) => {
  if (userChoice === computerChoice) {
    return 'Draw';
  }  else if (userChoice === 'rock') {
    return computerChoice === 'scissors' ?'Win' : 'Loss';
  } else if (userChoice === 'paper') {
    return computerChoice === 'rock' ? 'Win' : 'Loss';
  } else {
    return computerChoice === 'paper' ? 'Win' : 'Loss';
  }
}

// Calls required Functions to set variables
const userChoice = getUserChoice('scissors');
const computerChoice = getComputerChoice();
const condition = determineWinner(userChoice, computerChoice);

// Log the result of the game based on above variables.
console.log(`${condition}\nPlayer: ${userChoice}\nComputer: ${computerChoice}`);
