import { alertMsg } from "./constants/textStates";

// Get the important elements
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const littleBoy = document.getElementById("little-boy");
const alertText = document.getElementById("alert-text");

window.addEventListener("load", function () {
  console.log("encendiendo");
  inputText.value = "";
  outputText.innerHTML = "Enter the message you want to Encrypt/Decrypt";
  alertText.innerHTML = alertMsg.noText;
});

console.log("encendiendo2");
