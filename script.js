function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  return (randNum == 1) ? "rock" : (randNum == 2) ? "paper" : "scissors"
}

function getHumanChoice() {
  let humanChoice = prompt("Choose one of the three [rock / paper / scissors]:")
  return humanChoice.toLowerCase(); 
}
