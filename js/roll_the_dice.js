const rollBtn = document.querySelector(".btn-roll");

let computerRoll = 0,
  computerScore = 0;
let userRoll = 0,
  userScore = 0;

const computerDice = document.querySelector(
  ".game-board__computer .dice .dice-content"
);
const userDice = document.querySelector(
  ".game-board__user .dice .dice-content"
);

computerDice.style.gridTemplateColumns = "repeat(3, 1fr)";
computerDice.style.gridTemplateRows = "repeat(3, 1fr)";
userDice.style.gridTemplateColumns = "repeat(3, 1fr)";
userDice.style.gridTemplateRows = "repeat(3, 1fr)";

const computerScoreDisplay = document.querySelector(
  ".game-board__computer .score"
);
const userScoreDisplay = document.querySelector(".game-board__user .score");
computerScoreDisplay.textContent = computerScore;
userScoreDisplay.textContent = userScore;

const gameBoardMessage = document.querySelector(".game-board__message");

let message = "";

rollBtn.addEventListener("click", function () {
  computerRoll = Math.round(Math.random() * 5 + 1);
  userRoll = Math.round(Math.random() * 5 + 1);
  while (computerDice.firstChild) {
    computerDice.removeChild(computerDice.lastChild);
  }
  while (userDice.firstChild) {
    userDice.removeChild(userDice.lastChild);
  }

  if (computerRoll !== userRoll) {
    if (computerRoll > userRoll) {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      if (userScore === 10) {
        message = "You won!";
        rollBtn.disabled = true;
      }
    } else {
      userScore++;
      userScoreDisplay.textContent = userScore;
      if (computerScore === 10) {
        message = "You lost!";
        rollBtn.disabled = true;
      }
    }
    computerRoll = numberToDotsArray(computerRoll);
    for (let i = 0; i < 9; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (computerRoll.includes(i + 1)) {
        dot.classList.add("visible");
      }
      computerDice.append(dot);
    }
    userRoll = numberToDotsArray(userRoll);
    for (let i = 0; i < 9; i++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (userRoll.includes(i + 1)) {
        dot.classList.add("visible");
      }
      userDice.append(dot);
    }
  } else {
    message = "Draw!";
  }
});

function numberToDotsArray(roll) {
  const one = [5];
  const two = [1, 9];
  const three = [1, 5, 9];
  const four = [1, 3, 7, 9];
  const five = [1, 3, 5, 7, 9];
  const six = [1, 3, 4, 6, 7, 9];
  let rollArray;
  switch (roll) {
    case 1:
      rollArray = one;
      break;
    case 2:
      rollArray = two;
      break;
    case 3:
      rollArray = three;
      break;
    case 4:
      rollArray = four;
      break;
    case 5:
      rollArray = five;
      break;
    case 6:
      rollArray = six;
      break;
  }
  return rollArray;
}
