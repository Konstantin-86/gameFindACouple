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

const getBestResult = (keys, currentResult) => {
    let bestTime = keys[0][0];
    let indexNumber = 0

    for (let index = 0; index < keys.length; index++) {
        if (Number(keys[index][0]) < bestTime) {
            bestTime = Number(keys[index][0])
            indexNumber = index
        }
    }
    const bestTimeinStorage = keys[indexNumber];

    if (bestTimeinStorage[0] == currentResult[0]) {
        timer.textContent = `Ты повторил свое лучшее время - ${currentResult[0]} секунд`;

    } else if (bestTimeinStorage[0] > currentResult[0]) {
        timer.textContent = `Ты улучшил свое лучшее время!!! Новый рекорд - ${currentResult[0]} секунд`;
        localStorage.setItem(currentResult[0], currentResult[1]);

    } else {
        bestTimeTitle.classList.remove('hidden');
        timer.textContent = `Твое время - ${currentResult[0]} секунд`;
        bestTimeTitle.textContent = `Лучшее время ${bestTimeinStorage[0]} секунд, дата ${bestTimeinStorage[1]}`;
        localStorage.setItem(currentResult[0], currentResult[1]);

    }
}


export const chekStorage = () => {
    const keys = Object.entries(localStorage).sort();
    const filteredKeys = keys.filter(item => item[0] !== "name" && item[0] !== "--main-color");

    const resultTime = getResultTime();
    const currentTime = getCurrentTime();
    const currentResult = [resultTime, currentTime];

    if (filteredKeys.length === 0) {
        timer.textContent = `Твое время - ${resultTime} секунд. Попробуй улучшить его!)`
        localStorage.setItem(resultTime, currentTime);
        return;
    }
    getBestResult(filteredKeys, currentResult);

}
