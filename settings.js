const colorPicker = document.querySelector(".color-input");
const saveBtn = document.querySelector(".save-setting");
const settings = document.querySelector(".settings");
const settingBox = document.querySelector(".setting-box");
const addName = document.querySelector("#name");
const frontBg = document.querySelector(".inner-frontBg");
const cardFront = document.querySelectorAll(".card-front");
const cardBack = document.querySelectorAll(".card-back");
const curName = document.querySelector(".cur-name");
const statisticsList = document.querySelector(".statistics-list");

const root = document.documentElement;

const nameInStorage = localStorage.getItem("name");
const colorInStorage = localStorage.getItem("--main-color");

let curColor = colorPicker.value

colorPicker.addEventListener("input", () => {
    curColor = colorPicker.value
});


function checkName() {
    if (nameInStorage) {
        curName.innerHTML = nameInStorage;
        addName.value = nameInStorage
    }
    return
}


function checkColor() {
    if (colorInStorage) {
        root.style.setProperty('--main-color', colorInStorage)
        colorPicker.value = colorInStorage
    }
    return
}


saveBtn.addEventListener("click", () => {
    settingBox.classList.remove("active");

    root.style.setProperty('--main-color', curColor)
    curName.innerHTML = addName.value

    localStorage.setItem("name", addName.value)
    localStorage.setItem("--main-color", curColor)
});


frontBg.addEventListener("click", (event) => {
    cardBack.forEach((item) => {
        item.style.border = "none";
    })
    cardFront.forEach((item) => {
        item.textContent = ""
        item.style.backgroundImage = `url(${event.target.src})`
    })
})


settings.addEventListener("click", () => {
    settingBox.classList.toggle("active");
    if (settingBox.classList.contains("active")) {
        statisticsList.classList.remove("active");
    }
})

curName.addEventListener("click", () => {
    statisticsList.classList.toggle("active");
    if (settingBox.classList.contains("active")) {
        settingBox.classList.remove("active");
    }
})
function checkStorage() {
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        allData[key] = value;
    }
    delete allData["name"];
    delete allData["--main-color"];
    const array = Object.entries(allData);

    if (array.length === 0) {
        const li = document.createElement("li");
        li.classList.add("statistic-item");
        li.textContent = `Ты еще не играл`;
        statisticsList.appendChild(li);
    }

    array.forEach((item) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        li.classList.add("statistic-item");
        li.textContent = `Время ${item[0]}`;
        span.textContent = `Дата ${item[1]}`;
        li.appendChild(span);
        statisticsList.appendChild(li);
    })
}

checkName()
checkColor()
checkStorage()