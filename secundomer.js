import { resetBtn, timer, bestTimeTitle } from "./variables.js";


let seconds = 0;
let minutes = 0;
let interval;

const startStopWatch = () => {
    const updateTime = () => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    interval = setInterval(updateTime, 1000);
}
const pauseStopWatch = () => {
    clearInterval(interval);
}

const getResultTime = () => {
    const array = timer.textContent.split(':');
    minutes = Number(array[0]);
    seconds = Number(array[1]);
    let result = 0;
    if (minutes > 0) {
        result = minutes * 60 + seconds
        return result
    }
    return result += seconds
}


resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    timer.textContent = '00:00';
    startStopWatch()
    resetBtn.classList.add('hidden')
    bestTimeTitle.classList.add('hidden')
});

export { getResultTime, startStopWatch, pauseStopWatch };