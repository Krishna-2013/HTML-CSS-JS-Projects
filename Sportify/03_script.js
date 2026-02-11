console.log("hello");

//Initialize the Variables
let songIndex = 0;
let audioEl = new Audio(
    "/songs/02_Hindi SONG/party song/01_Abhi Toh Party Shuru Hui Hai Khoobsurat 320 Kbps.mp3"
);
let masterPlay = document.getElementById("Play");
let songPlayBtns = document.getElementsByClassName("timeStampPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {
        songname: "Abhi Toh Party Shuru Hui Hai",
        filepath:
            "/Songs/02_Hindi SONG/party song/01_Abhi Toh Party Shuru Hui Hai Khoobsurat 320 Kbps.mp3",
        coverPath: "",
        duration: "02:59",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Swag se karange sabka swagat",
        filepath:
            "/Songs/02_Hindi SONG/party song/02_Swag se karange sabka swagat.mp3",
        coverPath: "",
        duration: "03:53",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Aankh Marey",
        filepath:
            "/Songs/02_Hindi SONG/party song/03_Aankh Marey Simmba 128 Kbps.mp3",
        coverPath: "",
        duration: "03:32",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Bom Diggy Diggy",
        filepath:
            "/Songs/02_Hindi SONG/party song/04_Bom Diggy Diggy Sonu Ke Titu Ki Sweety 320 Kbps.mp3",
        coverPath: "",
        duration: "03:58",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Burj Khalifa",
        filepath:
            "/Songs/02_Hindi SONG/party song/05_Burjkhalifa Laxmii 320 Kbps.mp3",
        coverPath: "",
        duration: "03:14",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Chikni Chameli",
        filepath:
            "/Songs/02_Hindi SONG/party song/06_Chikni Chameli(KoshalWorld.Com).mp3",
        coverPath: "",
        duration: "06:04",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kar Gayi Chull",
        filepath:
            "/Songs/02_Hindi SONG/party song/07_Kar Gayi Chull Kapoor And Sons 128 Kbps.mp3",
        coverPath: "",
        duration: "03:07",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kashish",
        filepath:
            "/Songs/02_Hindi SONG/party song/08_Kashish - Omkar Singh (pagalall.com).mp3",
        coverPath: "",
        duration: "03:13",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Coca Cola - Luka Chuppi",
        filepath:
            "/Songs/02_Hindi SONG/party song/09_Coca Cola Luka Chuppi 128 Kbps.mp3",
        coverPath: "",
        duration: "02:59",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Nashe Si Chadh Gayi",
        filepath:
            "/Songs/02_Hindi SONG/party song/10_Nashe Si Chadh Gayi - Befikre 320 Kbps.mp3",
        coverPath: "",
        duration: "03:57",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tauba Tauba - Bad Newz",
        filepath:
            "/Songs/02_Hindi SONG/party song/11_Tauba Tauba - Bad Newz 320 Kbps.mp3",
        coverPath: "",
        duration: "03:27",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sweety Slowly Slowly",
        filepath:
            "/Songs/02_Hindi SONG/party song/12_Sweety Slowly Slowly Sonu Ke Titu Ki Sweety 320 Kbps.mp3",
        coverPath: "",
        duration: "03:07",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sauda Khara Khara",
        filepath:
            "/Songs/02_Hindi SONG/party song/13_Sauda Khara Khara - Sukhbir (Mr-Punjab.Com)-128kb.mp3",
        coverPath: "",
        duration: "04:16",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "O Saki Saki",
        filepath:
            "/Songs/02_Hindi SONG/party song/14_O Saki Saki Batla House 320 Kbps.mp3",
        coverPath: "",
        duration: "03:11",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "LAAL PARI",
        filepath:
            "/Songs/02_Hindi SONG/party song/15_LAAL PARI.m4a",
        coverPath: "",
        duration: "03:04",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Galti Se Mistake",
        filepath:
            "/Songs/02_Hindi SONG/party song/16_Galti Se Mistake Jagga Jasoos 320 Kbps.mp3",
        coverPath: "",
        duration: "03:23",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Cheez Badi",
        filepath:
            "/Songs/02_Hindi SONG/party song/Cheez Badi Machine 320 Kbps.mp3",
        coverPath: "",
        duration: "03:42",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Gallan Goodiyaan",
        filepath:
            "/Songs/02_Hindi SONG/party song/Gallan Goodiyaan Dil Dhadakne Do (pagalall.com).mp3",
        coverPath: "",
        duration: "04:56",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Garmi (feat. Varun Dhawan)",
        filepath:
            "/Songs/02_Hindi SONG/party song/Garmi (feat. Varun Dhawan) Street Dancer 3d 320 Kbps.mp3",
        coverPath: "",
        duration: "03:02",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Ghungroo",
        filepath:
            "/Songs/02_Hindi SONG/party song/Ghungroo War 320 Kbps.mp3",
        coverPath: "",
        duration: "05:03",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Hai Jamalo",
        filepath:
            "/Songs/02_Hindi SONG/party song/Hai Jamalo.mp3",
        coverPath: "",
        duration: "02:07",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Aaj Ki Raat",
        filepath:
            "/Songs/02_Hindi SONG/party song/Aaj Ki Raat (From _Stree 2_) - Sachin-Jigar.mp3",
        coverPath: "",
        duration: "02:35",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kala Chashma",
        filepath:
            "/Songs/02_Hindi SONG/party song/Kala Chasma.mp3",
        coverPath: "",
        duration: "02:53",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Besharam Rang - Pathaan",
        filepath:
            "/Songs/02_Hindi SONG/party song/Besharam Rang Pathaan 128 Kbps.mp3",
        coverPath: "",
        duration: "04:18",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kesariya - Brahmastra",
        filepath:
            "/Songs/02_Hindi SONG/party song/Kesariya Brahmastra 320 Kbps.mp3",
        coverPath: "",
        duration: "04:28",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "London Thumakda - Queen",
        filepath:
            "/Songs/02_Hindi SONG/party song/London Thumakda Queen 128 Kbps.mp3",
        coverPath: "",
        duration: "03:50",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Lut Gaye",
        filepath:
            "/Songs/02_Hindi SONG/party song/Lut Gaye Jubin Nautiyal 128 Kbps.mp3",
        coverPath: "",
        duration: "03:48",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Malhari",
        filepath:
            "/Songs/02_Hindi SONG/party song/Malhari Bajirao Mastani 320 Kbps.mp3",
        coverPath: "",
        duration: "04:04",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Nach meri jan",
        filepath:
            "/Songs/02_Hindi SONG/party song/Nach meri jan.mp3",
        coverPath: "",
        duration: "04:52",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Nagada Sang Dhol",
        filepath:
            "/Songs/02_Hindi SONG/party song/Nagada Sang Dhol Goliyon Ki Raasleela Ram Leela 320 Kbps.mp3",
        coverPath: "",
        duration: "04:33",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Najaa",
        filepath:
            "/Songs/02_Hindi SONG/party song/Najaa.mp3",
        coverPath: "",
        duration: "03:01",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "NASHA",
        filepath:
            "/Songs/02_Hindi SONG/party song/NASHA .mp3",
        coverPath: "",
        duration: "02:56",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Passori",
        filepath:
            "/Songs/02_Hindi SONG/party song/Passori.mp3",
        coverPath: "",
        duration: "04:36",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Radhe Radhe - title",
        filepath:
            "/Songs/02_Hindi SONG/party song/Radhe Radhe - title.mp4",
        coverPath: "",
        duration: "03:02",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Radhe Radhe",
        filepath:
            "/Songs/02_Hindi SONG/party song/Radhe Radhe.mp4",
        coverPath: "",
        duration: "03:17",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Saree Ke Fall Sa R...",
        filepath:
            "/Songs/02_Hindi SONG/party song/Saree Ke Fall Sa R... Rajkumar 320 Kbps.mp3",
        coverPath: "",
        duration: "03:56",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Shaky",
        filepath:
            "/Songs/02_Hindi SONG/party song/Shaky Sanju Rathod, Isha Malviya (pagalall.com).mp3",
        coverPath: "",
        duration: "02:55",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tamma Tamma",
        filepath:
            "/Songs/02_Hindi SONG/party song/Tamma Tamma Again- Badrinath Ki Dulhania 128 Kbps.mp3",
        coverPath: "",
        duration: "03:19",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tere Vaaste",
        filepath:
            "/Songs/02_Hindi SONG/party song/Tere Vaaste Zara Hatke Zara Bachke 320 Kbps.mp3",
        coverPath: "",
        duration: "03:09",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Vaaste",
        filepath:
            "/Songs/02_Hindi SONG/party song/Vaaste .mp3",
        coverPath: "",
        duration: "05:06",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
];
// audioEl.play();

songItems.forEach((element, i) => {
    console.log(element, i);
    songs[i].coverPath = `/cover/hindi/Party/${i + 1}.jpg`;
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
  if (songIndex >= 40) {
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
