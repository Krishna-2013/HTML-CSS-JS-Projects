console.log("hello");

//Initialize the Variables
let songIndex = 0;
let audioEl = new Audio("/Songs/01_English song/Believer.mp3");
let masterPlay = document.getElementById("Play");
let songPlayBtns = document.getElementsByClassName("timeStampPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songname: "Believer",
    filepath: "/Songs/01_English song/Believer.mp3",
    coverPath: "",
    duration: "03:24",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Die With A Smile",
    filepath: "/Songs/01_English song/Die With A Smile-(SambalpuriStar.In).mp3",
    coverPath: "",
    duration: "04:11",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Unstoppable",
    filepath: "/Songs/01_English song/Unstoppable.mp3",
    coverPath: "",
    duration: "03:35",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Arcade",
    filepath: "/Songs/01_English song/Arcade_-_Duncan_Lawrence_(mp3.pm).mp3",
    coverPath: "",
    duration: "03:03",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "I Wanna Be Yours",
    filepath: "/Songs/01_English song/arctic_monkey_-_i_wanna_be_yours_(mp3.pm).mp3",
    coverPath: "",
    duration: "03:00",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Imagine_Dragons (The Boys)",
    filepath: "/Songs/01_English song/Imagine_Dragons_-_Bones_(mp3.pm).mp3",
    coverPath: "",
    duration: "02:45",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Let Me Down Slowly",
    filepath: "/Songs/01_English song/Let Me Down Slowly English Song SLMIX.mp3",
    coverPath: "",
    duration: "02:48",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
];
// audioEl.play();

songItems.forEach((element, i) => {
  console.log(element, i);
  songs[i].coverPath = `/cover/english/${i + 1}.jpg`;
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songname;
  element.getElementsByClassName("timeStamp")[0].innerText = songs[i].duration;
  element
    .getElementsByClassName("timeStampPlay")[0]
    .setAttribute("data-index", i);
});

//handle play/pause
masterPlay.addEventListener("click", () => {
  if (audioEl.paused || audioEl.currentTime <= 0) {
    audioEl.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioEl.pause();
    makeAllPalys();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//listen to events
audioEl.addEventListener("timeupdate", () => {
  progress = parseInt((audioEl.currentTime / audioEl.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioEl.currentTime = (myProgressBar.value * audioEl.duration) / 100;
});

const makeAllPalys = () => {
  Array.from(document.getElementsByClassName("timeStampPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("timeStampPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      if (e.target.classList.contains("fa-circle-play")) {
        makeAllPalys();
        songIndex = parseInt(e.target.dataset.index);
        masterSongName.innerText = songs[songIndex].songname;
        audioEl.currentTime = 0;
        audioEl.src = songs[songIndex].filepath;
        gif.style.opacity = 1;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioEl.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
      } else if (e.target.classList.contains("fa-circle-pause")) {
        makeAllPalys();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        audioEl.pause();
      }
    });
  }
);

const makeAllPause = () => {
  const elements = document.getElementsByClassName("timeStampPlay");
  Array.from(elements).forEach((el) => {
    el.classList.remove("fa-circle-play");
    el.classList.add("fa-circle-pause");
  });
};

document.getElementById("Next").addEventListener("click", () => {
  if (songIndex >= 7) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioEl.currentTime = 0;
  audioEl.src = songs[songIndex].filepath;
  masterSongName.innerText = songs[songIndex].songname;
  audioEl.play();
  makeAllPalys();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("Previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioEl.currentTime = 0;
  audioEl.src = songs[songIndex].filepath;
  masterSongName.innerText = songs[songIndex].songname;
  audioEl.play();
  makeAllPalys();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

audioEl.onplay = () => {
  makeAllPalys();
  songPlayBtns[songIndex].classList.replace(
    "fa-circle-play",
    "fa-circle-pause"
  );
};

audioEl.onpause = () => {
  songPlayBtns[songIndex].classList.replace(
    "fa-circle-pause",
    "fa-circle-play"
  );
};
