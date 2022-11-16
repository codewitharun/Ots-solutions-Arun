// let button = document.querySelector("#btn");
// button.addEventListener("click", calculateBMI);

let previousGuesses = [];
let maxrecord = 5;

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");
  let resultt = document.querySelector("#resultt");

  //remove 1st element from previousGuesses if previousGuesses.length > 1

  if (previousGuesses && previousGuesses.length > 10) {
    previousGuesses.splice(0, 1);
  }

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  else {
    // Fixing upto 2 decimal places
    let bmi = (weight / (height * height)).toFixed(2);
    // Dividing as per the bmi conditions

    if (bmi < 18.6) {
      result.innerHTML = `Under Weight : <span>${bmi}</span>`;
      previousGuesses.push(bmi);
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal : <span>${bmi}</span>`;
      previousGuesses.push(bmi);
    } else {
      result.innerHTML = `Over Weight : <span>${bmi}</span>`;
      previousGuesses.push(bmi);
    }
  }
  resultt.innerHTML = `<span>${previousGuesses}</span>`;
  height = parseInt((document.querySelector("#height").value = " "));

  weight = parseInt((document.querySelector("#weight").value = " "));
}
