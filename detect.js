const video = document.querySelector('video');

video.addEventListener('play', (event) => {
    WebviumVideoAudioHelper.play();
});
