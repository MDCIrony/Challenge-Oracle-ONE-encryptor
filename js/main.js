import { alertMsg } from "./constants/textStates";

// Get the important elements
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");
const littleBoy = document.getElementById("little-boy");
const alertText = document.getElementById("alert-text");

function encryptText() {
  outputText.innerHTML = inputText.value;
}

function isSomeTextHere() {
  if (inputText.value !== "") {
    littleBoy.style.display = "none";
    return;
  }
  littleBoy.style.display = "inline-block";
}

function replyInputOnOutput() {
  outputText.innerHTML = inputText.value;
}

inputText.addEventListener(
  "input",
  () => {
    isSomeTextHere();
    replyInputOnOutput();
  },
  false
);

btnEncrypt.addEventListener("click", encryptText, false);
