// Get the important elements
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");
const littleBoy = document.getElementById("little-boy");
const alertText = document.getElementById("alert-text");

// All constants
export const alertMsg = {
  noText: "No messages found",
  preparedText: "Click on Encrypt/Decrypt button and see the magic ;)",
  postText: "You can copy your Encrypt/Decrypt text with copy button!",
};

const outputFirstMessage = "Enter the message you want to Encrypt/Decrypt";

const encryptConditions = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

let actionState = false;

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
  if (actionState === true) {
    console.log(
      "Aqui debe pasar algo, como una alerta, diciendo que debe colocarse nuevo texto."
    );
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
  if (actionState === true) {
    console.log(
      "Aqui debe pasar algo, como una alerta, diciendo que debe colocarse nuevo texto."
    );
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

btnEncrypt.addEventListener("click", encrypt, false);
btnDecrypt.addEventListener("click", decrypt, false);
