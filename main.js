let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
const soundBtn = document.getElementById("sound__btn"); 
const soundIcon = document.getElementById("sound__icon"); 

const tickSound = new Audio('tick.mp3'); 
let isMuted = true; 

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    if (!isMuted) {
        tickSound.currentTime = 0; 
        tickSound.play();
    }
}, 1000);

soundBtn.addEventListener("click", () => {
    isMuted = !isMuted;

    if (isMuted) {
    
        soundIcon.classList.remove('bxs-volume-full');
        soundIcon.classList.add('bxs-volume-mute');
    } else {
        soundIcon.classList.remove('bxs-volume-mute');
        soundIcon.classList.add('bxs-volume-full');
        tickSound.play().catch(() => {});
    }
});





