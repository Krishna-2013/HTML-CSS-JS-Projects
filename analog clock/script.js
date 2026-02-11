document.addEventListener("click", () => {
  setInterval(() => {
    const date = new Date();
    const hour = date.getHours() % 12;
    const minute = date.getMinutes();
    const second = date.getSeconds();
    hrotation = 30 * hour + minute / 2;
    mrotation = 6 * minute;
    srotation = 6 * second;
    const hours = document.getElementById("hour");
    const minutes = document.getElementById("minute");
    const seconds = document.getElementById("second");
    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
  }, 1000);

  const audio = new Audio("clock_sound.wav");
  audio.loop = true;
  audio.play();

  start = document.querySelector("#start");
  start.remove();
});

