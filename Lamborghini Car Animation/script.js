const track = document.querySelector(".track");
const car = document.querySelector(".car");
const wheelL_img = document.querySelector(".wheelL img");
const wheelR_img = document.querySelector(".wheelR img");
const body = document.querySelector("body");
const audio = new Audio("sound.mp3");
audio.loop = true;

document.addEventListener("click", () => {
  audio.play();
  start.remove();
  track.style.animation = "trackMove linear 16s infinite";
  car.style.animation = "shake linear 1s infinite";
  wheelL_img.style.animation = "wheelRotation linear .16s infinite";
  wheelR_img.style.animation = "wheelRotation linear .16s infinite";
  body.style.animation = "shakeBody linear 6s infinite";
});

