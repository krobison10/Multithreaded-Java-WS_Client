
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");

submitButton.addEventListener("click", () => console.log("Click"));

clearButton.addEventListener("click", () => {
  document.getElementById("results").innerHTML = "";
});



