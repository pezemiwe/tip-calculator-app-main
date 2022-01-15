let firstValue = document.getElementById("metrica");

let secondValue = document.getElementById("metricb");

let buttons = document.querySelectorAll(".grid-item");

function calculateTip(number) {
let billAmount = document.getElementById("boxa").value.trim();
let noOfPersons = document.getElementById("boxb").value.trim();
// let tipAmount = document.getElementById("metrica").value;
// let total = document.getElementById("metricb").value;
let billPerPerson = parseFloat(billAmount) / parseInt(noOfPersons);
let percentage = number / 100;
let AmountOfTip = billPerPerson * percentage; 
let totalPerPerson = billPerPerson + AmountOfTip;


document.getElementById("metrica").innerText = "$" + " " + AmountOfTip.toFixed(2);
document.getElementById("metricb").innerText = "$" + " " + totalPerPerson.toFixed(2);

};

const parent = document.querySelector(".people");
let customNumber = document.getElementById("anycent").value.trim();
const outputError = () => {
    parent.classList.add("error");
};

const outputSuccess = () => {
    parent.classList.remove("error");
};

// const numCheck = () => {
//     let noOfPersons = document.getElementById("boxb").value();
//     if (noOfPersons === 0 || noOfPersons === " " ) {
//         outputError();
//     } else { 
//         outputSuccess();
//     }
// };



document.getElementById("fivecent").onclick = function() {

    calculateTip(5);
};

document.getElementById("tencent").onclick = function() {

    calculateTip(10);
};

document.getElementById("fifcent").onclick = function() {

    calculateTip(15);
};

document.getElementById("twencent").onclick = function() {

    calculateTip(25);
};

document.getElementById("fiftycent").onclick = function() {

    calculateTip(50);
};

document.getElementById("anycent").oninput = function() {
    if (customNumber !== '') {
    calculateTip(customNumber);
    }
};


function toReset() {
    document.getElementById("anycent").value = '';
    document.getElementById("boxa").value = '';
    document.getElementById("boxb").value = '';
    document.getElementById("metrica").innerHTML = "$" + "0.00";
    document.getElementById("metricb").innerHTML = "$" + "0.00";
};

document.getElementById("reset").onclick = function() {
    toReset();

    outputSuccess();
};