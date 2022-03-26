let firstValue = document.getElementById("metrica");
let secondValue = document.getElementById("metricb");
let buttons = document.querySelectorAll(".grid-item");
let customInput = document.getElementById("anycent");


function calculateTip(number) {
  let billAmount = document.getElementById("boxa").value.trim();
  let noOfPersons = document.getElementById("boxb").value.trim();
  let billPerPerson = parseFloat(billAmount) / parseInt(noOfPersons);
  let percentage = number / 100;
  let AmountOfTip = billPerPerson * percentage;
  let totalPerPerson = billPerPerson + AmountOfTip;
  firstValue.innerText = "$" + " " + AmountOfTip.toFixed(2);
  secondValue.innerText = "$" + " " + totalPerPerson.toFixed(2);
}

let inputBox = document.getElementById("boxb");
const err = document.querySelector(".textb");
const outputError = () => {
  err.classList.add("error");
  inputBox.classList.add("error2");
};

const outputSuccess = () => {
  err.classList.remove("error");
  inputBox.classList.remove("error2");
};

const customInputFunction = () => {
  let customInputValue = parseInt(customInput.value);
  if (customInputValue < 1) {
    outputError();
  } else {
    outputSuccess();
    calculateTip(customInputValue);
  }
};
customInput.addEventListener("input", customInputFunction);

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (inputBox.value === ""  || inputBox.value === "0") {
            outputError();
          } else {
              outputSuccess();
          }
        calculateTip(Number(button.id));
    });
});


function toReset() {
  document.getElementById("anycent").value = "";
  document.getElementById("boxa").value = "";
  document.getElementById("boxb").value = "";
  document.getElementById("metrica").innerHTML = "$" + "0.00";
  document.getElementById("metricb").innerHTML = "$" + "0.00";
}

document.getElementById("reset").onclick = function () {
  toReset();
  outputSuccess();
};
