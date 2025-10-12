function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('player-choice').textContent = `You chose: ${playerChoice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computerChoice}`;

  const winner = getWinner(playerChoice, computerChoice);
  document.getElementById('winner').textContent = winner;
}

function getWinner(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}