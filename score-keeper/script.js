let player1Btn = document.querySelector('#player-1-btn');
let player2Btn = document.querySelector('#player-2-btn');
let resetBtn = document.querySelector('#reset-btn');
let maxscoreDisplay = document.querySelector('#maxscore');
let player1Display = document.querySelector('#player-1');
let player2Display = document.querySelector('#player-2');
let inputScore = document.querySelector('#score');
let player1Score = 0;
let player2Score = 0;
let maxScore = 5;

player1Display.innerText = player1Score;
player2Display.innerText = player2Score;

const disableButtons = (winnerDisplay) => {
  player1Btn.disabled = true;
  player2Btn.disabled = true;
  winnerDisplay.classList.add('text-green-400');
};

player1Btn.addEventListener('click', (e) => {
  player1Score++;
  player1Display.innerText = player1Score;
  console.log(maxScore);
  if (maxScore === Number(player1Score)) {
    disableButtons(player1Display);
  }
});

player2Btn.addEventListener('click', (e) => {
  player2Score++;
  player2Display.innerText = player2Score;
  if (maxScore === Number(player2Score)) {
    disableButtons(player2Display);
  }
});

inputScore.addEventListener('keyup', () => {
  let inputValue = Number(inputScore.value);
  if (!isNaN(inputValue) && inputValue > 0) {
    maxScore = inputValue;
  }
  player1Score = 0;
  player2Score = 0;
  player1Display.innerText = player1Score;
  player2Display.innerText = player2Score;
  maxscoreDisplay.innerText = `Score pour gagner : ${maxScore}`;
});

resetBtn.addEventListener('click', (e) => {
  console.log(player1Score);
  player1Score = 0;
  player2Score = 0;
  player1Display.innerText = player1Score;
  player2Display.innerText = player2Score;
  player1Btn.disabled = false;
  player2Btn.disabled = false;
  player1Display.classList.remove('text-green-400');
  player2Display.classList.remove('text-green-400');
});
