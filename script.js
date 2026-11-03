const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function money(value) {
  return value.toFixed(2);
}

function showError(message) {
  result.className = "error";
  result.textContent = message;
}

function calculateTip() {
  const billRaw = billInput.value.trim();
  const peopleRaw = peopleInput.value.trim();
  const bill = Number(billRaw);
  const people = Number(peopleRaw);
  const tipPercent = Number(tipSelect.value);

  if (billRaw === "" || Number.isNaN(bill)) {
    showError("Please enter a bill amount.");
    return;
  }

  if (bill < 0) {
    showError("Bill amount can't be negative.");
    return;
  }

  if (peopleRaw === "" || Number.isNaN(people)) {
    showError("Please enter the number of people.");
    return;
  }

  if (people <= 0) {
    showError("Number of people must be at least 1.");
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const perPerson = total / people;

  result.className = "";
  result.innerHTML =
    `Tip: $${money(tipAmount)}<br>` +
    `Total: $${money(total)}<br>` +
    `Per person: $${money(perPerson)}`;
}

calculateButton.addEventListener("click", calculateTip);
