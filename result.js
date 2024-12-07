import { pauseStopWatch } from "./secundomer.js";
import { resetBtn } from "./variables.js";
import { chekStorage } from "./statistic.js";


export const finalResult = () => {
    resetBtn.classList.remove('hidden')
    pauseStopWatch();
    chekStorage();
}
