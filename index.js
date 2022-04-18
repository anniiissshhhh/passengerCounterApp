// document.getElementById("count-el").innerText = 5;

// let count = 0;
// console.log(count);

// Program to convert myAge to dogAge
// 1 human year = 7 dog years
// let myAge = 17;
// let humanDogRatio = 7;
// let myDogAge = humanDogRatio * myAge;
// console.log(`My Human age is ${myAge} and My Dog Age is ${myDogAge}`);

// bonus point program something lol
// let bonusPoint = 50;
// console.log("bonus point- " + bonusPoint);

// bonusPoint = bonusPoint + 50; // 100
// console.log("increased to- " + bonusPoint);

// bonusPoint = bonusPoint - 75; // 25
// console.log("decreased to- " + bonusPoint);

// bonusPoint = bonusPoint + 45; // 70
// console.log("Increased to- " + bonusPoint);

//? PSEUDO CODE
// initialize the count as 0
// listen for the clicks in the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countStr = " " + count + " -";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    console.log(count);
    count = 0;
}

count = 0;