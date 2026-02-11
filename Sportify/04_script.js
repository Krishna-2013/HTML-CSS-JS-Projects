console.log("hello");

//Initialize the Variables
let songIndex = 0;
let audioEl = new Audio("/Songs/03_Bengali SONG/10 e 10.mp3");
let masterPlay = document.getElementById("Play");
let songPlayBtns = document.getElementsByClassName("timeStampPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songname: "10 e 10",
    filepath: "/Songs/03_Bengali SONG/10 e 10.mp3",
    coverPath: "",
    duration: "03:11",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Ami Je Tomar",
    filepath: "/Songs/03_Bengali SONG/Ami Je Tomar Bhool Bhulaiyaa 2 320 Kbps.mp3",
    coverPath: "",
    duration: "03:18",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Bagichay_Bulbuli_Tui",
    filepath: "/Songs/03_Bengali SONG/Bagichay_Bulbuli_Tui.mp3",
    coverPath: "",
    duration: "05:55",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Dugga Elo",
    filepath: "/Songs/03_Bengali SONG/Dugga Elo-(Mr-Jat.in).mp3",
    coverPath: "",
    duration: "02:25",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Dushtu Kokil",
    filepath: "/Songs/03_Bengali SONG/Dushtu Kokil Dake Re Ku Ku-(Mr-Jat.in).mp3",
    coverPath: "",
    duration: "03:30",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Gulbahar _ গুলবাহার",
    filepath: "/Songs/03_Bengali SONG/Gulbahar _ গুলবাহার _ Ishaan এর Gaan _ Shuvendu Das Shuvo _ Official Music Video(M4A_128K) (1).m4a",
    coverPath: "",
    duration: "04:23",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Laage Ura Ura",
    filepath: "/Songs/03_Bengali SONG/Laage Ura Ura (Toofan) - 320Kbps-(Mr-Jat.in).mp3",
    coverPath: "",
    duration: "02:56",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
    songname: "Long Distance Love.mp3",
    filepath: "/Songs/03_Bengali SONG/Long Distance Love.mp3",
    coverPath: "",
    duration: "04:45",
    icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
  },
  {
      songname: "Na Re Na.mp3",
      filepath: "/Songs/03_Bengali SONG/Na Re Na.mp3",
      coverPath: "",
      duration: "04:04",
      icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
      songname: "Ohona",
      filepath: "/Songs/03_Bengali SONG/Ohona _ Subconscious _ Lyrics video(M4A_128K).m4a",
      coverPath: "",
      duration: "04:45",
      icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
      songname: "Oporadhi",
      filepath: "/Songs/03_Bengali SONG/Oporadhi-(Mr-Jat.in).mp3",
      coverPath: "",
      duration: "05:27",
      icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
      songname: "Parbo Na",
      filepath: "/Songs/03_Bengali SONG/Parbo Na - Arijit Singh.mp3",
      coverPath: "",
      duration: "04:36",
      icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
      songname: "Prokritir ai sundorjo",
      filepath: "/Songs/03_Bengali SONG/Prokritir ai sundorjo.mp3",
      coverPath: "",
      duration: "03:44",
      icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
      songname: "Zara zara.",
      filepath: "/Songs/03_Bengali SONG/Zara zara.mp3",
      duration: "03:45",
      icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
];
// audioEl.play();

songItems.forEach((element, i) => {
  console.log(element, i);
  songs[i].coverPath = `/cover/bangla/${i + 1}.jpg`;
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
  if (songIndex >= 14) {
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
