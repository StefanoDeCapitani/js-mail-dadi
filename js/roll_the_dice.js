const rollBtn = document.querySelector(".btn-roll");

let computerRoll = 0,
  computerScore = 0;
let userRoll = 0,
  userScore = 0;

const computerDice = document.querySelector(".game-board__computer .dice");
const userDice = document.querySelector(".game-board__user .dice");

const computerScoreDisplay = document.querySelector(
  ".game-board__computer .score"
);
const userScoreDisplay = document.querySelector(".game-board__user .score");
computerScoreDisplay.textContent = computerScore;
userScoreDisplay.textContent = userScore;

let message = "";

rollBtn.addEventListener("click", function () {
  computerRoll = Math.round(Math.random() * 5 + 1);
  userRoll = Math.round(Math.random() * 5 + 1);
  computerDice.textContent = computerRoll;
  userDice.textContent = userRoll;
  if (computerRoll !== userRoll) {
    if (computerRoll > userRoll) {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      if (userScore === 10) {
        message = "You won!";
        rollBtn.disable = true;
      }
    } else {
      userScore++;
      userScoreDisplay.textContent = userScore;
      if (computerScore === 10) {
        message = "You lost!";
        rollBtn.disable = true;
      }
    }
  } else {
    message = "Draw!";
  }

  console.log(computerRoll, userRoll);
  console.log(computerScore, userScore);
});
