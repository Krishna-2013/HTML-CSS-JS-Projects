console.log("hello");

//Initialize the Variables
let songIndex = 0;
let audioEl = new Audio(
    "/songs/02_Hindi SONG/Sad song/Ae Dil Hai Mushkil Title Track Pritam 320 Kbps.mp3"
);
let masterPlay = document.getElementById("Play");
let songPlayBtns = document.getElementsByClassName("timeStampPlay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    {
        songname: "Ae Dil Hai Mushkil",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Ae Dil Hai Mushkil Title Track Pritam 320 Kbps.mp3",
        coverPath: "",
        duration: "04:29",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Afusic - Pal Pal",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Afusic - Pal Pal (Official Music Video) Prod. _AliSoomroMusic(M4A_128K).m4a",
        coverPath: "",
        duration: "02:27",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Agar Tum Saath Ho",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Agar Tum Saath Ho - Tamasha 320 Kbps.mp3",
        coverPath: "",
        duration: "05:41",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Apna Bana Le",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Apna Bana Le - (Raag.Fm).mp3",
        coverPath: "",
        duration: "04:21",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Arcade x Mann Mera",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Arcade x Mann Mera (Mashup)(KoshalWorld.Com).mp3",
        coverPath: "",
        duration: "03:10",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tainu Khabar Nahi",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Arijit Singh - Tainu Khabar Nahi.m4a",
        coverPath: "",
        duration: "02:38",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Baarish Mein Tum",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Baarish Mein Tum - Neha Kakkar 320 Kbps.mp3",
        coverPath: "",
        duration: "03:47",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Bahut Pyar Karte Hai",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Bahut Pyar Karte Hai.mp3",
        coverPath: "",
        duration: "03:05",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Banjaara",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Banjaara Ek Villain 320 Kbps.mp3",
        coverPath: "",
        duration: "05:36",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Barish",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Barish.mp3",
        coverPath: "",
        duration: "04:45",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Bewafa.mp3",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/bewafa.mp3",
        coverPath: "",
        duration: "02:58",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Channa Mereya",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Channa Mereya - (Raag.Fm).mp3",
        coverPath: "",
        duration: "04:56",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Choddiya",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Choddiya.mp3",
        coverPath: "",
        duration: "02:42",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Chupa Na Sagogi",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/chupa na sagogi.mp3",
        coverPath: "",
        duration: "06:23",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Dil De Diya Hai",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Dil_De_Diya_Hai.mp3",
        coverPath: "",
        duration: "04:49",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Duniyaa",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Duniyaa - Luka Chuppi 320 Kbps.mp3",
        coverPath: "",
        duration: "03:42",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Galliyan",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/galliyan.mp3",
        coverPath: "",
        duration: "05:09",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Guzarish",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Guzarish.mp3",
        coverPath: "",
        duration: "04:27",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Hamari Adhuri Kahani",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/hamari.mp3",
        coverPath: "",
        duration: "05:40",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Hamdard",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Hamdard.mp3",
        coverPath: "",
        duration: "04:49",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Hasi",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Hasi.mp3",
        coverPath: "",
        duration: "01:50",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Hawayein",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Hawayein Jab Harry Met Sejal (original Motion Picturetrack) 320 Kbps.mp3",
        coverPath: "",
        duration: "04:50",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Heeriye",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Heeriye Arijit Singh 320 Kbps.mp3",
        coverPath: "",
        duration: "03:14",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Humnava Mere",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Humnava Mere Jubin Nautiyal 320 Kbps.mp3",
        coverPath: "",
        duration: "05:29",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Infinity x Jo Badal Barse",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Infinity x Kabhi Jo Badal Barse Mashup(KoshalWorld.Com).mp3",
        coverPath: "",
        duration: "02:51",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Ishq",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Ishq-(SambalpuriStar.In).mp3",
        coverPath: "",
        duration: "03:48",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Jeene Laga Hoon",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Jeene Laga Hoon .m4a",
        coverPath: "",
        duration: "03:21",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "JHIM JHIM",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/JHIM JHIM .mp3",
        coverPath: "",
        duration: "04:09",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Jhol",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Jhol - Coke Studio Pakistan (pagalall.com).mp3",
        coverPath: "",
        duration: "04:38",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Jitni Dafa",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Jitni Dafa.m4a",
        coverPath: "",
        duration: "03:32",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kabhii Tumhhe",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Kabhii Tumhhe Shershaah 320 Kbps.mp3",
        coverPath: "",
        duration: "03:50",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kahani Suno",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Kahani Suno.mp3",
        coverPath: "",
        duration: "02:53",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kaise Hua",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Kaise Hua Kabir Singh 320 Kbps.mp3",
        coverPath: "",
        duration: "03:54",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kalank",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Kalank.m4a",
        coverPath: "",
        duration: "05:13",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kaun Tujhe",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Kaun Tujhe.mp3",
        coverPath: "",
        duration: "04:01",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Khairiyat",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Khairiyat Chhichhore 320 Kbps.mp3",
        coverPath: "",
        duration: "04:40",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Khamoshiyan",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Khamoshiyan.mp3",
        coverPath: "",
        duration: "02:30",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Kheech Meri Photo",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Kheech Meri Photo.mp3",
        coverPath: "",
        duration: "04:44",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Khusi Ki Pal",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/khusi ki pal.mp3",
        coverPath: "",
        duration: "04:15",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Maan Meri Jaan",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Maan Meri Jaan.mp3",
        coverPath: "",
        duration: "03:14",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Main Dhoondne Ko Zamaane Mein",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Main Dhoondne Ko Zamaane Mein.mp3",
        coverPath: "",
        duration: "04:23",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Malang",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Malang Sajna Sachet Tandon 128 Kbps.mp3",
        coverPath: "",
        duration: "02:41",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Mann Mera",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Mann Mera [Lyrics]- Gajendra Verma(M4A_128K).m4a",
        coverPath: "",
        duration: "03:10",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Meri Zindagi Hai Tu",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Meri Zindagi Hai Tu.mp3",
        coverPath: "",
        duration: "04:44",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Milne Hai Mujhse Aayi",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Milne Hai Mujhse Aayi.mp3",
        coverPath: "",
        duration: "04:55",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Mujhe Peene Do",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Mujhe Peene Do.mp3",
        coverPath: "",
        duration: "03:16",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Nadaaniyan Akshath",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Nadaaniyan Akshath 320 Kbps.mp3",
        coverPath: "",
        duration: "02:51",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "O Maahi",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/O Maahi Dunki 320 Kbps.mp3",
        coverPath: "",
        duration: "03:53",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Pehle Bhi Main",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Pehle Bhi Main Animal 128 Kbps.mp3",
        coverPath: "",
        duration: "04:10",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Phir Mahabat",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Phir_Mahabat.mp3",
        coverPath: "",
        duration: "05:48",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Raabta",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Raabta Agent Vinod 128 Kbps.mp3",
        coverPath: "",
        duration: "04:04",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Raanjhan",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Raanjhan Do Patti 128 Kbps (1).mp3",
        coverPath: "",
        duration: "04:00",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Ram Siya Ram",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Ram Siya Ram Adipurush 128 Kbps.mp3",
        coverPath: "",
        duration: "03:50",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Roi Na Je yaad Meri Aayi Ve",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Roi Na Je yaad Meri Aayi Ve.mp3",
        coverPath: "",
        duration: "03:09",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sahiba",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Sahiba.m4a",
        coverPath: "",
        duration: "03:03",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Saiyaara Title Song.m4a",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Saiyaara Title Song.m4a",
        coverPath: "",
        duration: "04:08",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sanam Re",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Sanam Re Arijit Singh 320 Kbps.mp3",
        coverPath: "",
        duration: "05:08",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Satranga",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Satranga Animal 320 Kbps.mp3",
        coverPath: "",
        duration: "04:31",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Shukriya",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Shukriya Sadak 2 320 Kbps.mp3",
        coverPath: "",
        duration: "04:45",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sochenga",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Socheen.mp3",
        coverPath: "",
        duration: "05:15",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sun Raha Hai",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Sun Raha Hai.mp3",
        coverPath: "",
        duration: "03:49",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Sun Saathiya",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Sun Saathiya.mp3",
        coverPath: "",
        duration: "03:15",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tera Kasoor",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tera Kasoor - Vishal Mishra 320 Kbps.mp3",
        coverPath: "",
        duration: "03:28",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tera Yaar Hoon Main",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tera Yaar Hoon Main - Sonu Ke Titu Ki Sweety 320 Kbps.mp3",
        coverPath: "",
        duration: "04:24",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tu Hai Kahan",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tu Hai Kahan-(Mr-Jat.in).mp3",
        coverPath: "",
        duration: "04:23",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tu Hain Toh Main Hoon",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tu Hain Toh Main Hoon.mp3",
        coverPath: "",
        duration: "02:45",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tu Laut Aa",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tu Laut Aa Yasser Desai 320 Kbps.mp3",
        coverPath: "",
        duration: "03:06",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tujh Mein Rab Dikhta Hai",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tujh Mein Rab Dikhta Hai.m4a",
        coverPath: "",
        duration: "04:41",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Tum Hi Ho",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Tum Hi Ho (Aashiqui 2)-(Mr-Jat.in).mp3",
        coverPath: "",
        duration: "04:22",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Vaaste",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Vaaste .mp3",
        coverPath: "",
        duration: "05:06",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Victory Anthem",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Victory Anthem - PagalHits.mp3",
        coverPath: "",
        duration: "02:41",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/WhatsApp Audio 2025-08-18 at 19.02.22_4e0612b9.mp3",
        coverPath: "",
        duration: "03:10",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/WhatsApp Audio 2025-08-18 at 19.02.23_7fc8e959.mp3",
        coverPath: "",
        duration: "03:38",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Woh Din",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Woh Din Chhichhore 128 Kbps.mp3",
        coverPath: "",
        duration: "04:18",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Ye Tune Kya Kiya",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Ye Tune Kya Kiya - Once Upon A Time In Mumbaai Dobara 128 Kbps.mp3",
        coverPath: "",
        duration: "05:14",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Zara Zara x Let Me Down Slowly",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Zara Zara x Let Me Down Slowly Mashup(KoshalWorld.Com) (1).mp3",
        coverPath: "",
        duration: "04:22",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Zara Zara",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Zara Zara.mp3",
        coverPath: "",
        duration: "03:26",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
    {
        songname: "Zarrori Tha",
        filepath:
            "/Songs/02_Hindi SONG/Sad song/Zarrori Tha.mp3",
        coverPath: "",
        duration: "02:35",
        icon: '<i class="timeStampPlay fa-regular fa-circle-play"></i>',
    },
];

// audioEl.play();

songItems.forEach((element, i) => {
    if(songs[i].songname === ""){
        songs[i].songname = "Unknown"
    }
    console.log(element, i);
    songs[i].coverPath = `/cover/hindi/Sad/${i + 1}.jpg`;
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
  if (songIndex >= 78) {
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
