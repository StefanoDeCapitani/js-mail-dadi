const rollBtn = document.querySelector(".btn-roll");
const messageImg = document.querySelector(".message-image");

/* messageImg.setAttribute("src", "img/roll-the-dice.png"); */

const MAX_NUMBER_OF_ROLLS = 10;

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

const dices = document.querySelectorAll(".dice");

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
  clearElement(computerDice);
  clearElement(userDice);

  rollAllDices();

  setScores();
  displayScores();

  checkForWin(computerScore, userScore);
  stopWhenScoreReachesMax(computerScore, userScore);

  appendDiceDotsToDiceContent(computerDice, computerRoll);
  appendDiceDotsToDiceContent(userDice, userRoll);
});

function clearElement(dice) {
  while (dice.firstChild) {
    dice.removeChild(dice.lastChild);
  }
}

function rollAllDices() {
  computerRoll = rollDice();
  userRoll = rollDice();
}

function rollDice() {
  return Math.round(Math.random() * 5 + 1);
}

function setScores() {
  if (computerRoll > userRoll) {
    computerScore++;
  } else if (computerRoll < userRoll) {
    userScore++;
  }
}

function displayScores() {
  resetScoresColorAndFontSizes();
  computerScoreDisplay.textContent = computerScore;
  userScoreDisplay.textContent = userScore;
  if (computerRoll > userRoll) {
    computerScoreDisplay.style.background = "#B0E298";
    computerScoreDisplay.style.fontSize = "2rem";
  }
  if (computerRoll < userRoll) {
    userScoreDisplay.style.background = "#B0E298";
    userScoreDisplay.style.fontSize = "2rem";
  }
  if (computerRoll === userRoll) {
    dices.forEach((el) => (el.style.background = "#B0E298"));
  }
}

function resetScoresColorAndFontSizes() {
  computerScoreDisplay.style.background = "#f9f9f9";
  userScoreDisplay.style.background = "#f9f9f9";
  computerScoreDisplay.style.fontSize = "1rem";
  userScoreDisplay.style.fontSize = "1rem";
  dices.forEach((el) => (el.style.background = "#f9f9f9"));
}

function appendDiceDotsToDiceContent(dice, roll) {
  roll = numberToDotsArray(roll);
  for (let i = 0; i < 9; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    if (roll.includes(i + 1)) {
      dot.classList.add("visible");
    }
    dice.append(dot);
  }
}

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

function checkForWin(computerScore, userScore) {
  if (computerScore === MAX_NUMBER_OF_ROLLS) {
    displayWin();
  }
  if (userScore === MAX_NUMBER_OF_ROLLS) {
    displayLost();
  }
}

function displayWin() {
  messageImg.setAttribute("src", "img/you-lost.png");
}

function displayLost() {
  messageImg.setAttribute("src", "img/you-win.png");
}

function stopWhenScoreReachesMax(computerScore, userScore) {
  maxNumberOfRollsReached =
    computerScore === MAX_NUMBER_OF_ROLLS || userScore === MAX_NUMBER_OF_ROLLS;
  if (maxNumberOfRollsReached) {
    rollBtn.disabled = true;
    rollBtn.style.color = "rgba(61, 59, 142, 0.3)";
  }
}
