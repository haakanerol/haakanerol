const btnPlayer1 = document.querySelector(".player1");
const btnPlayer2 = document.querySelector(".player2");
const btnReset = document.querySelector(".reset");
const scoreToWin = document.getElementById("score");
const leftScore = document.querySelector(".score-player1");
const rightScore = document.querySelector(".score-player2");

scoreToWin.focus();

btnPlayer1.disabled = "true";
btnPlayer2.disabled = "true";

scoreToWin.addEventListener("input", () => {
  if (scoreToWin.value < 1 || scoreToWin.value > 10) {
    alert("Please enter a score 1-10");
    scoreToWin.value = "";
    btnPlayer1.disabled = "true";
    btnPlayer2.disabled = "true";
  } else {
    btnPlayer1.disabled = false;
    btnPlayer2.disabled = false;
  }
});

btnPlayer1.addEventListener("click", () => {
  scoreToWin.disabled = "true";
  leftScore.textContent++;
  if (leftScore.textContent === scoreToWin.value) {
    leftScore.style.color = "green";
    rightScore.style.color = "red";
    btnPlayer1.disabled = "true";
    btnPlayer2.disabled = "true";
  }
});

btnPlayer2.addEventListener("click", () => {
  scoreToWin.disabled = "true";
  rightScore.textContent++;
  if (rightScore.textContent === scoreToWin.value) {
    rightScore.style.color = "green";
    leftScore.style.color = "red";
    btnPlayer1.disabled = "true";
    btnPlayer2.disabled = "true";
  }
});

btnReset.addEventListener("click", () => {
  location.reload();
});

// const scores= document.querySelector(".scores")

// scores.addEventListener("click",(e)=>{
//     console.log(e);
//     if(e.target.classList.contains("player1")){
//        let scr= e.target.closest(".score-player1")
//       console.log(scr);
//     }

// })
