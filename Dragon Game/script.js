//Query Selectors

const start = document.querySelector("#start");
const dino = document.querySelector(".dino");
const obstacle = document.querySelector(".obstacle");
const gameOver = document.querySelector("#gameOver");
const resetbtn = document.querySelector("#reset");
const scoreContainer = document.querySelector("#scoreContainer");
const highContainer = document.querySelector("#highContainer");

//Styles
gameOver.style.display = "none"
resetbtn.style.display = "none"

//Bulion and scores
let collisionInterval;
let score = 0;
let highScore = 0;
let isGameOver = false;
let passed = false;
let musicStarted = false;
let prevObsLeft = null;

//Speed
const MIN_OBS_DURATION = 3.3;
const SPEEDUP_STEP = 0.1;
const HIGH_SCORE_KEY = "dragonGame.highScore";

//Music selector
const audiogameover = new Audio("gameover.mp3")
const music = new Audio("music.mp3")

const storedHighScore = parseInt(localStorage.getItem(HIGH_SCORE_KEY), 10);
if (!Number.isNaN(storedHighScore)) {
  highScore = storedHighScore;
}

highContainer.innerHTML = "Highest Score: " + highScore;
scoreContainer.innerHTML = "Your Score: " + score;

document.addEventListener("keydown", (e) => {

  //key code
  const code = e.code;

  //check for game over  
  if (isGameOver) return;
  if (start) {
    start.style.display = "none";
  }
  obstacle.classList.add("obstacleAnimation");
  
  //Music Start
  if (!musicStarted) {
    music.loop = true;
    music.play();
    musicStarted = true;
  }
  
  //Jump
  if (
    (code === "Space" || code === "ArrowUp" || code === "PageUp") &&
    !dino.classList.contains("dinoJump")
  ) {
    dino.classList.add("dinoJump");
    
    setTimeout(() => {
      dino.classList.remove("dinoJump");
    }, 700);
  }

  //Right
  else if (code === "KeyD" || code === "ArrowRight") {
    let dinoLeft = parseInt(getComputedStyle(dino).left) || 0;
    dinoLeft = Math.max(0, Math.min(dinoLeft + 112, 1090));
    dino.style.left = dinoLeft + "px";
  }

  //Left
  else if (code === "KeyA" || code === "ArrowLeft") {
    let dinoLeft = parseInt(getComputedStyle(dino).left) || 0;
    dinoLeft = Math.max(0, Math.min(dinoLeft - 112, 1090));
    dino.style.left = dinoLeft + "px";
  }
});

collisionInterval = setInterval(() => {
  if (isGameOver) return;

  const dinoRect = dino.getBoundingClientRect();
  const obsRect = obstacle.getBoundingClientRect();
  if (prevObsLeft !== null && obsRect.left > prevObsLeft) {
    passed = false;
  }
  prevObsLeft = obsRect.left;
  
  if (
    dinoRect.right > obsRect.left &&
    dinoRect.left < obsRect.right &&
    dinoRect.bottom > obsRect.top &&
    dinoRect.top < obsRect.bottom
  ) {
    music.pause();
    music.currentTime = 0;
    musicStarted = false;
    isGameOver = true;
    gameOver.style.display = "block";
    resetbtn.style.display = "block"
    obstacle.classList.remove("obstacleAnimation");
    clearInterval(collisionInterval);
    if (score > highScore) {
      highContainer.innerHTML = "Highest Score: " + score;
      highScore = score;
      localStorage.setItem(HIGH_SCORE_KEY, String(highScore));
    }

    //game over music
    audiogameover.play();
    setTimeout(() => {
      audiogameover.pause();
    }, 1000);

    return;
  } 
  if (!passed && obsRect.right < dinoRect.left) {
    score++;
    updateScore(score);
    passed = true;
    setTimeout(() => {
      const aniDur = parseFloat(getComputedStyle(obstacle).animationDuration) || 5;
      const newDur = Math.max(MIN_OBS_DURATION, aniDur - SPEEDUP_STEP);
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 100);

function updateScore(score) {
  scoreContainer.innerHTML = "Your Score: " + score;
}

resetbtn.addEventListener("click", () => {
  location.reload();
})
