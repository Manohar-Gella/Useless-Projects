document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const fileInput = document.getElementById('fileInput');
    const selectBtn = document.getElementById('selectBtn');

    playBtn.addEventListener('click', function () {
        audioPlayer.play();
    });

    pauseBtn.addEventListener('click', function () {
        audioPlayer.pause();
    });

    stopBtn.addEventListener('click', function () {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });

    selectBtn.addEventListener('click', function () {
        fileInput.click();
    });

    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
    });
});
