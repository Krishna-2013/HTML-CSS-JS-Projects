console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let gameOver = false;
let turn_of = "X";
const start = document.querySelector("#start");

document.addEventListener("click", () => {
  music.play();
  start.remove();
})
// For change the turn
const changeTurn = () => {
  return turn_of === "X" ? "0" : "X";
};

// For check winner
const checkWin = () => {
  let boxes = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[2]].innerText === boxes[e[1]].innerText &&
      boxes[e[0]].innerText !== ""
    ) {
      gameOver = true;
      document.querySelector(".info").innerText =
        boxes[e[1]].innerText + " Win the match!🥳";
      document
        .querySelector(".image")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(".line").style.transform =
        `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

//draw
const checkDraw = () => {
  let boxes = document.getElementsByClassName("boxText");
  return Array.from(boxes).every(box => box.innerText !== "");
};
//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((el) => {
  let boxText = el.querySelector(".boxText");
  el.addEventListener("click", () => {
    if (gameOver === false && boxText.innerText === "") {
      turn.play();
      boxText.innerText = turn_of;
      turn_of = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn_of;
      }
      if (!gameOver && checkDraw()) {
        document.getElementsByClassName("info")[0].innerText = "Its a draw👍";
      }
    }
  });
});

//reset btn
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxText");
  Array.from(boxText).forEach((el) => {
    turn.play();
    el.innerText = "";
    turn_of = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText =
      "Turn for " + turn_of;
    document.getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
  });
});
