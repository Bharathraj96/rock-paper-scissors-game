function playGame(player) {
  const choices = ['rock', 'paper', 'scissors'];
  const computer = choices[Math.floor(Math.random() * 3)];

  document.getElementById("player-choice").textContent = `You chose: ${player}`;
  document.getElementById("computer-choice").textContent = `Computer chose: ${computer}`;
  document.getElementById("winner").textContent = getWinner(player, computer);
}

function getWinner(player, computer) {
  if (player === computer) return "It's a Draw!";
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return "🎉 You Win!";
  } else {
    return "😞 You Lose!";
  }
}
