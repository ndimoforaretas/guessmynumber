"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; // this automatically generates a random number between 1 and 20 each time the game is restarted
let score = 20;
let highscore = 0;
let guessesSoFar = [];
const displayMessage = function (message) {
  document.querySelector(".message1").textContent = message;
};
const guessesCompiler = function (guess) {
  guessesSoFar.push(guess);
  document.querySelector(".guesses").textContent = guessesSoFar;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // This verifies if a number has been typed in
  if (!guess || guess < 0 || guess > 20) {
    displayMessage(
      "⛔️ Invaid input! Please type in a number between 1 and 20!"
    );

    // Winning message
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    // this changes the screen color to green
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    //this verifies and updates the highscore to the current highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the player looses, the Your score value reduces by 1 each time the check button is clicked. As soon as the player has made 20 aaatempts the background color changes to blue and the game is over...
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
      guessesCompiler(guess);
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(14, 26, 158)";
    }
  }
});

// For the Game reset button in order to reset all values to their initial state except the High Sore value..
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  guessesSoFar = [];

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guesses").textContent = "None";
  document.querySelector(".guesses").style.color = "#60b347";
  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});

// for the quit button in order to close the window all together
document.querySelector(".quit").addEventListener("click", function () {
  window.close();
});
