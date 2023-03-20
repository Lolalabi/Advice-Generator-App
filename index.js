const numId = document.querySelector("#num");
const quoteResponse = document.querySelector("#quote");
const diceButton = document.querySelector("#dice");

diceButton.addEventListener("click", randomQuotes);
const baseURL = "https://api.adviceslip.com/advice";
async function randomQuotes() {
  let response = await fetch(baseURL);
  let result = await response.json();
  numId.innerHTML = result.slip.id;
  quoteResponse.innerHTML = '"' + result.slip.advice + '"';
}

randomQuotes();
