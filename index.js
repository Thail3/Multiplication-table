let numberInput = document.getElementById("changeValue");
let buttonSubmit = document.getElementById("submit");
let result = document.getElementById("output");

function calculateValue() {
  let num = Number(numberInput.value);
  let item = "";
  for (let i = 1; i <= 12; i++) {
    if (num > 12) {
      alert("Please input value 1-12");
      num = 1;
    }
    item += num + " x " + i + " = " + num * i + "<br/>";
  }
  result.innerHTML = item;
}
buttonSubmit.addEventListener("click", calculateValue);
