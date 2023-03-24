const audio = document.getElementById("my-audio");
const playPauseButton = document.getElementById("play-pause-button");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");
const volumeSlider = document.getElementById("volume-slider");

playPauseButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("timeupdate", function() {
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime - currentMinutes * 60);
  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration - durationMinutes * 60);

  currentTime.textContent = currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;
  duration.textContent = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;
});

volumeSlider.addEventListener("input", function() {
  audio.volume = volumeSlider.value;
});



