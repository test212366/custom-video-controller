const video = document.querySelector('.video'),
    playBtn = document.querySelector('.controls__play'),
    stopBtn = document.querySelector('.controls__stop'),
    progress = document.querySelector('.progress'),
    time = document.querySelector('.controls__time')

function toggleVideoStatus() {
    if(video.paused) {
        video.play()

    } else {
        video.pause()
    }
}
function stopVideo() {
    video.currentTime = 0
    video.pause()
}
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100
    let minutes = Math.floor(video.currentTime / 60)
    let seconds = Math.floor(video.currentTime % 60)
    if(seconds < 10) {
        seconds = '0' + seconds
    }
    time.textContent = `${minutes}:${seconds}`
    console.log(progress.value)
}
function setProgress() {
    video.currentTime = (progress.value * video.duration) / 100
}
video.addEventListener('timeupdate', updateProgress)
playBtn.addEventListener('click', toggleVideoStatus)
stopBtn.addEventListener('click', stopVideo)
progress.addEventListener('click', setProgress)