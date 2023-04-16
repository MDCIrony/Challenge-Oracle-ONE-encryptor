// Get the important elements
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");
const littleBoy = document.getElementById("little-boy");
const alertText = document.getElementById("alert-text");

// All constants
let firstAction = false;
let actionState = false;
const outputFirstMessage = "Enter the message you want to Encrypt/Decrypt";

const alertMsg = {
  noText: "No text found",
  preparedText: "Click on Encrypt/Decrypt button and see the magic ;)",
  postText: "You can copy your Encrypt/Decrypt text with copy button!",
};

const encryptConditions = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

// INITIALIZE
// Onload event
window.addEventListener("load", function () {
  inputText.value = "";
  outputText.innerHTML = outputFirstMessage;
  alertText.innerHTML = alertMsg.noText;
});

// Main methods

// When you input text..

function isSomeTextHere() {
  if (inputText.value !== "") {
    littleBoy.style.display = "none";
    alertText.innerHTML = alertMsg.preparedText;
    return;
  }
  littleBoy.style.display = "inline-block";
}

function replyInputOnOutput() {
  if (!firstAction) firstAction = true;

  if (inputText.value === "") {
    outputText.innerHTML = outputFirstMessage;
    alertText.innerHTML = alertMsg.noText;
    return;
  }

  outputText.innerHTML = inputText.value;
  actionState = false;
}

inputText.addEventListener(
  "input",
  () => {
    isSomeTextHere();
    replyInputOnOutput();
  },
  false
);

// Buttons methods
// When you encrypt text...
function encrypt() {
  if (actionState === true || firstAction === false) {
    alert("You must add a new text to be able to execute another action!");
    return;
  }

  const initialText = outputText.innerText;
  const encryptValues = Object.keys(encryptConditions);
  const regex = new RegExp(`${encryptValues.join("|")}`, "g");

  const encryptString = initialText.replace(regex, (match) => {
    return encryptConditions[match];
  });

  outputText.innerHTML = encryptString;
  alertText.innerHTML = alertMsg.postText;
  actionState = true;
}

// When you decrypt text...
function decrypt() {
  if (actionState === true || firstAction === false) {
    alert("You must add a new text to be able to execute another action!");
    return;
  }

  const initialText = inputText.value;
  const decryptValues = Object.values(encryptConditions);
  const regex = new RegExp(`(${decryptValues.join("|")})`, "g");

  const decryptedString = initialText.replace(regex, (match) => {
    const replace = Object.entries(encryptConditions).find(
      ([key, value]) => match === value
    );
    return replace ? replace[0] : match;
  });

  outputText.innerHTML = decryptedString;
  alertText.innerHTML = alertMsg.postText;
  actionState = true;
}

// When you copy your output text
function copy() {
  if (actionState === false) {
    alert("You need to encrypt or decrypt some text before");
    return;
  }

  navigator.clipboard
    .writeText(outputText.innerText)
    .then(() => {
      alert("Text copied to clipboard");
    })
    .catch((error) => {
      alert("Error copying text");
    });
}

btnEncrypt.addEventListener("click", encrypt, false);
btnDecrypt.addEventListener("click", decrypt, false);
btnCopy.addEventListener("click", copy, false);
