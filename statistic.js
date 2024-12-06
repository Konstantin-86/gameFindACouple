import { getResultTime } from "./secundomer.js";
import { bestTimeTitle, timer } from "./variables.js"

export const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const currentTime = `${hours}:${minutes}:${seconds}`;
    return currentTime;
}
const chekBestTime = () => {
    const keys = Object.entries(localStorage);
    const time = toString(getResultTime());

    if (time in keys) {
        return true
    }
    return false
}

export const setStorage = () => {
    const neverGiveUp = chekBestTime();

    if (!neverGiveUp) {
        const time = getResultTime();
        const currentTime = getCurrentTime();
        localStorage.setItem(time, currentTime);
        console.log("записал новые данные");
    }
}

export const getAllStorage = () => {
    const keys = Object.entries(localStorage);
    const time = getResultTime();
    const neverGiveUp = chekBestTime();
    console.log(keys);

    if (keys.length === 1) return timer.textContent = `Ваше время - ${time} секунд. Попробуйте улучшить его!)`;


    let bestTime = keys[0][0];
    let indexNumber = 0

    for (let index = 0; index < keys.length; index++) {
        if (Number(keys[index][0]) < bestTime) {
            bestTime = Number(keys[index][0])
            indexNumber = index
        }
    }
    const bestTimeinStorage = keys[indexNumber];
    console.log("neverGiveUp", neverGiveUp);
    console.log("time", time);

    if (neverGiveUp) {
        timer.textContent = `Вы повторили свое лучшее время - ${time} секунд`;
        return
    } else if (time < bestTimeinStorage[0]) {
        timer.textContent = `Вы улучшили свое лучшее время!!! Новый рекорд - ${time} секунд`;
    } else {
        bestTimeTitle.classList.remove('hidden');
        timer.textContent = `Ваше время - ${time} секунд`;
        bestTimeTitle.textContent = `Ваше лучшее время ${bestTimeinStorage[0]} секунд, дата ${bestTimeinStorage[1]}`;
    }

}
