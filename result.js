import { pauseStopWatch } from "./secundomer.js";
import { resetBtn } from "./variables.js";
import { getAllStorage, setStorage } from "./statistic.js";


export const finalResult = () => {
    resetBtn.classList.remove('hidden')
    pauseStopWatch();
    setStorage();
    getAllStorage();
}
