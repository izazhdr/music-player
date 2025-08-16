let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songSource = document.querySelector('.js-song');
let themeSwitch = document.querySelector('.theme-switch');
let darkMode = document.querySelector('.dark-mode');
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  durationEl.textContent = formatTime(song.duration);
};

let playPauseButton = document.querySelector('.js-play-pause');
playPauseButton.addEventListener('click', () => {
  playPause();
});

function playPause() {
  if (ctrlIcon.classList.contains('fa-pause')) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
    document.querySelector('.playing').innerHTML = 'Paused';
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
    document.querySelector('.playing').innerHTML = 'Playing';
  }
}

setInterval(() => {
  progress.value = song.currentTime;
  currentTimeEl.textContent = formatTime(song.currentTime);
}, 500);

progress.onchange = function() {
  song.load();
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

themeSwitch.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}

function formatTime(seconds) {
  seconds = Math.floor(seconds);
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return mins + ":" + (secs < 10 ? "0" : "") + secs;
}

/* Timer functions were added as a new feature. */