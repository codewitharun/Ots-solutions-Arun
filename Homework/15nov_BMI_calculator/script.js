window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

let previousGuesses = [];
let maxrecord = 5;

function calculateBMI() {
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");
  let resultt = document.querySelector("#resultt");

  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  else {
    // Fixing upto 2 decimal places
    let bmi = (weight / (height * height)).toFixed(2);
    // Dividing as per the bmi conditions
    resultt.innerHTML = `<span>${previousGuesses}</span>`;
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
}
