import { resetBtn } from "./variables.js";
import { finalResult } from "./result.js"

const cards = document.querySelectorAll('.card');

let currentImage = ""
let currentId = 0
let acsess = true
let finish = 0

cards.forEach((item) => {
    item.addEventListener('click', () => {

        if (!acsess) return

        const getImage = item.querySelector('.card-back__img');

        if (currentImage === getImage.style.backgroundImage && currentId !== item.id) {
            cards.forEach((card) => {
                if (card.id === currentId) {
                    card.classList.add('flipped');
                }
            })
            item.classList.add('flipped');
            finish += 2
            if (finish === 8) {
                finalResult();
                acsess = false
                return
            }
        } else {
            currentImage = getImage.style.backgroundImage
            currentId = item.id
            setTimeout(() => {
                item.classList.remove('flipped');
                acsess = true
            }, 600);
            acsess = false
            item.classList.toggle('flipped');
        }

    });
})

resetBtn.addEventListener("click", (event) => {
    event.preventDefault()
    cards.forEach((item) => {
        item.classList.remove('flipped');
        finish = 0
        currentImage = ""
        currentId = 0
        acsess = true
    })
})