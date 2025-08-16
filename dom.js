import {songs} from './data/songs.js';

let songGrid = '';

songs.forEach((song) => {
  songGrid += `
    <div class="card js-card-play-button" data-song-id="${song.id}">
        <img src="${song.image}" class="card-image">
        <p class="card-song-name">${song.name}</p>
        <p class="card-artist-name">${song.artist}</p>
    </div>
  `;
});

document.querySelector('.grid-container').innerHTML = songGrid;

let currentSongArray = [];
let playButton = document.querySelectorAll('.js-card-play-button');
let forwardButton = document.querySelector('.js-forward');
let backwardButton = document.querySelector('.js-backward');
let playerControl = document.querySelector('.player-control');

let forwardPlacementValue;
let backwardPlacementValue;


forwardButton.addEventListener('click', () => {
  if (thePlacementValue < 10 && thePlacementValue > 0) {
    forwardPlacementValue = ++thePlacementValue;
  } else {
    forwardPlacementValue = thePlacementValue;
  }
  songs.forEach((song) => {
    currentSongArray = [];
    if (forwardPlacementValue === song.placementId) {
      currentSongArray.push(song);
      let songSource = document.querySelector('.js-song');
      songSource.innerHTML = ``;
      songSource.innerHTML = `
        <source src="${song.audio}" data-placement-id="${song.placementId}" type="audio/mpeg">
      `;
      let placementOfSong = song.placementId;
      thePlacementValue = getThePlacement(placementOfSong);
      playNewSong(song);
    }
  });
});

backwardButton.addEventListener('click', () => {
  if (thePlacementValue < 11 && thePlacementValue > 1) {
    backwardPlacementValue = --thePlacementValue;
  } else {
    backwardPlacementValue = thePlacementValue;
  }
  songs.forEach((song) => {
    currentSongArray = [];
    if (backwardPlacementValue === song.placementId) {
      currentSongArray.push(song);
      let songSource = document.querySelector('.js-song');
      songSource.innerHTML = ``;
      songSource.innerHTML = `
        <source src="${song.audio}" data-placement-id="${song.placementId}" type="audio/mpeg">
      `;
      let placementOfSong = song.placementId;
      thePlacementValue = getThePlacement(placementOfSong);
      playNewSong(song);
    }
  });
});

playButton.forEach((button) => {
  button.addEventListener('click', () => {
    let buttonId = button.dataset.songId;
    currentSong(songs, button, buttonId);
    playerControl.classList.remove('player-control-none');
  });
});

let thePlacementValue;

function currentSong(songs, button, buttonId) {
  songs.forEach((song) => {
    currentSongArray = [];
    if (buttonId === song.id) {
      currentSongArray.push(song);
      let songSource = document.querySelector('.js-song');
      songSource.innerHTML = ``;
      songSource.innerHTML = `
        <source src="${song.audio}" data-placement-id="${song.placementId}" type="audio/mpeg">
      `;
      let placementOfSong = song.placementId;
      thePlacementValue = getThePlacement(placementOfSong);

      playNewSong(song);
    }
  });
}

function getThePlacement(placementOfSong) {
  return placementOfSong;
}

function playNewSong(songList) {
  song.load();
  song.play();
  document.querySelector('.playing').innerHTML = 'Playing';
  document.querySelector('.song-name').innerHTML = `${songList.name}`;
  document.querySelector('.song-artist').innerHTML = `${songList.artist}`;
  document.querySelector('.current-song-img').src = `${songList.image}`;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
}

let greetingElement = document.querySelector('.greetings');

if (dayjs().$H < 12) {
  greetingElement.innerHTML = 'Good Morning!';
} else if (dayjs().$H > 12 && dayjs().$H < 18) {
  greetingElement.innerHTML = 'Good Afternoon!';
} else {
  greetingElement.innerHTML = 'Good Evening!';
}