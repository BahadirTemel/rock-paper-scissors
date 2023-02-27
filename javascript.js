function getComputerChoice() {
  var pcrandom = Math.floor(Math.random() * 3);

  switch (pcrandom) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

/*

*/
var playerScore = 0;
var computerScore = 0;


function playRound(playerSelection, computerSelection) {
  switch (playerSelection + computerSelection) {
    case "rockrock":
    case "scissorscissor":
    case "paperpaper":
      console.log("You both have "+playerSelection+". It's a Draw!");
      break;
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      console.log("You choose "+playerSelection+" and the Computer choose "+computerSelection+". You Win!");
      playerScore++;
      break;
    case "scissorrock":
    case "rockpaper":
    case "paperscissor":
      console.log("You choose "+playerSelection+" and the Computer choose "+computerSelection+". You Lose!");
      computerScore++;
      break;
  }
}


function game(){
  for (; playerScore < 3 && computerScore < 3;){
    const playerSelection = prompt("Choose between: Rock, Paper and Scissor.").toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log("Your Score is "+playerScore+" and the Computers score is "+computerScore+".");
  }if (playerScore===3) {
         console.log("You Won the Game!");
  } else {
         console.log("You Lost the Game!");
  }
}


game();
