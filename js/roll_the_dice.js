const messageWinLostImg = document.querySelector(".message-image");
let messageWinLost = "";

let computerRoll = 0,
  computerScore = 0;
let userRoll = 0,
  userScore = 0;

const dices = document.querySelectorAll(".dice");
const diceContents = document.querySelectorAll(".dice-content");
diceContents.forEach((dice) => {
  for (let i = 0; i < 9; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    dice.append(dot);
  }
});

const computerDots = document.querySelectorAll(".game-board__computer .dot");
const userDots = document.querySelectorAll(".game-board__user .dot");

const computerScoreDisplay = document.querySelector(
  ".game-board__computer .score"
);
const userScoreDisplay = document.querySelector(".game-board__user .score");

const rollBtn = document.querySelector(".btn-roll");
const MAX_NUMBER_OF_ROLLS = 10;

rollBtn.addEventListener("click", function () {
  if (rollBtn.textContent === "RESTART") {
    clearPage();
  } else {
    clearDots();
    rollAllDices();
    displayAllBlackDots();

    setScores();
    displayScores();
    setMessageWinLost(computerScore, userScore);
    displayWinLost();

    stopWhenScoreReachesMax(computerScore, userScore);
  }
});

function clearPage() {
  clearDots();
  clearScores();
  displayScores();
  clearMessageWinLost();
  displayWinLost();
  enableButton();
}

function clearDots() {
  diceContents.forEach((diceContent) => {
    let dots = diceContent.querySelectorAll(".dot");
    dots.forEach((dot) => {
      dot.classList.remove("visible");
    });
  });
}

function displayAllBlackDots() {
  displayBlackDotsOnDice(computerDots, computerRoll);
  displayBlackDotsOnDice(userDots, userRoll);
}

function displayBlackDotsOnDice(dots, roll) {
  let numberToDisplay = numberToDotsArray(roll);
  for (let i = 0; i < 9; i++) {
    if (numberToDisplay.includes(i + 1)) {
      dots[i].classList.add("visible");
    }
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

function clearScores() {
  computerScore = 0;
  userScore = 0;
}

function displayScores() {
  resetScoresColorAndFontSizes();
  computerScoreDisplay.textContent = computerScore;
  userScoreDisplay.textContent = userScore;
  setScoreColorAndFontSizes();
}

function resetScoresColorAndFontSizes() {
  computerScoreDisplay.classList.remove("partial-win");
  userScoreDisplay.classList.remove("partial-win");
  dices.forEach((el) => el.classList.remove("tie"));
}

function setScoreColorAndFontSizes() {
  if (computerRoll > userRoll) {
    displayPartialWin(computerScoreDisplay);
  }
  if (computerRoll < userRoll) {
    displayPartialWin(userScoreDisplay);
  }
  if (computerRoll === userRoll) {
    displayTie();
  }
}

function displayPartialWin(display) {
  display.classList.add("partial-win");
}

function displayTie() {
  dices.forEach((el) => el.classList.add("tie"));
}

function setMessageWinLost(computerScore, userScore) {
  if (computerScore === MAX_NUMBER_OF_ROLLS) {
    messageWinLost = "img/you-lost.png";
  }
  if (userScore === MAX_NUMBER_OF_ROLLS) {
    messageWinLost = "img/you-win.png";
  }
}

function clearMessageWinLost() {
  messageWinLost = "";
}

function displayWinLost() {
  messageWinLostImg.setAttribute("src", messageWinLost);
}

function stopWhenScoreReachesMax(computerScore, userScore) {
  maxNumberOfRollsReached =
    computerScore === MAX_NUMBER_OF_ROLLS || userScore === MAX_NUMBER_OF_ROLLS;
  if (maxNumberOfRollsReached) {
    disableButton();
  }
}

function disableButton() {
  rollBtn.classList.remove("pulsating");
  rollBtn.classList.add("restart");
  rollBtn.textContent = "RESTART";
}

function enableButton() {
  rollBtn.classList.remove("restart");
  rollBtn.classList.add("pulsating");
  rollBtn.textContent = "ROLL";
}
