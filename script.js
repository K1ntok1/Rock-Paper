let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  return (randNum == 1) ? "rock" : (randNum == 2) ? "paper" : "scissors"
}

function getHumanChoice() {
  let humanAns = prompt("Choose one of the three [rock / paper / scissors]:")
  return humanAns.toLowerCase(); 
}

function playRound(humanChoice,computerChoice) {

  if(humanChoice == computerChoice) {
    console.log("Its a draw");
  }
  else if(humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win!! Paper beats Rock");
    humanScore++;
  }
  else if(humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose!! paper beats rock");
    computerScore++;
  }
  else if(humanChoice == "paper" && computerChoice == "scissors"){
    console.log("You lose!! scissors beats paper");
    computerScore++;
  }
  else if(humanChoice == "scissors" && computerChoice == "paper"){
    console.log("You win!! scissors beats paper");
    humanScore++;
  }
  else if(humanChoice == "rock" && computerChoice == "scissors"){
    console.log("You win!! rock beats scissors");
    humanScore++;
  }
  else if(humanChoice == "scissors" && computerChoice == "rock"){
    console.log("you lose!! rock beats scissors");
    computerScore++;
  }
  
}

