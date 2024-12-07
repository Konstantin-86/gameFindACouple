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

const getBestResult = (keys, currentResult, resultTime) => {
    let bestTime = keys[0][0];
    let indexNumber = 0

    for (let index = 0; index < keys.length; index++) {
        if (Number(keys[index][0]) < bestTime) {
            bestTime = Number(keys[index][0])
            indexNumber = index
        }
    }
    const bestTimeinStorage = keys[indexNumber];
    console.log(bestTimeinStorage);

    if (bestTimeinStorage[0] == resultTime) {
        timer.textContent = `Вы повторили свое лучшее время - ${currentResult[0]} секунд`;

    } else if (bestTimeinStorage[0] > currentResult[0]) {
        console.log("улучшил результат");
        timer.textContent = `Вы улучшили свое лучшее время!!! Новый рекорд - ${currentResult[0]} секунд`;
        try {
            localStorage.setItem(bestTimeinStorage[0], bestTimeinStorage[1]);
            console.log("Данные успешно записаны в localStorage");
        } catch (error) {
            console.error("Ошибка при записи в localStorage:", error);
        }

    } else {
        console.log("лучший  результат");
        bestTimeTitle.classList.remove('hidden');
        timer.textContent = `Ваше время - ${currentResult[0]} секунд`;
        bestTimeTitle.textContent = `Ваше лучшее время ${bestTimeinStorage[0]} секунд, дата ${bestTimeinStorage[1]}`;
        localStorage.setItem(currentResult[0], currentResult[1]);

    }
}


export const chekStorage = () => {
    const keys = Object.entries(localStorage);
    const resultTime = getResultTime();
    const currentTime = getCurrentTime();
    const currentResult = [resultTime, currentTime];

    if (keys.length === 0) {
        timer.textContent = `Ваше время - ${resultTime} секунд. Попробуйте улучшить его!)`
        localStorage.setItem(resultTime, currentTime);
        return;
    }
    getBestResult(keys, currentResult, resultTime);

}
