const memHouse = 10;
const sizeHome = 7;
const foodChoice = 4;
const waterChoice = 0;
const housePurch = 2;
const wasteProduce = 20;
const wasteRecycle = 16;
const transScore = 6;


const total = memHouse + sizeHome + foodChoice + waterChoice + housePurch + wasteProduce + wasteRecycle + transScore

const myHeading = document.querySelector("h2");
myHeading.textContent = total;
