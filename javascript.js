function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
  
  // Step 1: Initialize score counters
let wins = 0;
let losses = 0;
let ties = 0;

function playRound(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  // Step 2: Determine the result
  if (playerChoice === computerChoice) {
    result = `It's a tie! You both chose ${playerChoice}.`;
    ties++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You win! ${playerChoice} beats ${computerChoice}.`;
    wins++;
  } else {
    result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    losses++;
  }

  // Step 3: Display results and running score
  document.getElementById('result').textContent = result;
  document.getElementById('score').textContent = `Wins: ${wins} | Losses: ${losses} | Ties: ${ties}`;
  checkWinner();
}

function checkWinner() {
  if (wins === 5) {
    alert("🎉 You reached 5 points! You win the game!");
    resetGame();
  } else if (losses === 5) {
    alert("💀 The computer reached 5 points! You lose the game!");
    resetGame();
  }
}
function resetGame() {
  wins = 0;
  losses = 0;
  ties = 0;
  document.getElementById('result').textContent = "Game reset. Play again!";
  document.getElementById('score').textContent = `Wins: 0 | Losses: 0 | Ties: 0`;
}




// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
