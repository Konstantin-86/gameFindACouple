import pictures from "./data.js";
import { mainWrap, startBtn } from "./variables.js";
import { startStopWatch } from "./secundomer.js";

startBtn.addEventListener('click', () => {
    mainWrap.classList.remove("hidden")
    startBtn.classList.add("hidden")
    timer.classList.remove("hidden")
    startStopWatch();

})


const array = [1, 2, 3, 4, 5, 6, 7, 8]
function getRandomCards(array) {
    const halfArray = array.slice(0, 4);
    const newArray = [...halfArray, ...halfArray];
    const shuffledArray = newArray.sort(() => 0.5 - Math.random());

    return shuffledArray;
}
const result = getRandomCards(pictures)

const createCards = () => {

    array.forEach((item, index) => {
        const card = document.createElement('div');
        const cardInner = document.createElement('div');
        const cardFront = document.createElement('div');
        const cardBack = document.createElement('div');
        const backImg = document.createElement('img');

        card.classList.add('card');
        cardInner.classList.add('card-inner');
        cardFront.classList.add('card-front');
        cardBack.classList.add('card-back');
        backImg.classList.add('card-back__img');
        card.id = index + 1

        backImg.style.backgroundImage = `url(${result[index].src})`;

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        cardBack.appendChild(backImg);
        card.appendChild(cardInner);
        mainWrap.appendChild(card);
        cardFront.innerHTML = item;
    });
}
createCards();
export default createCards;