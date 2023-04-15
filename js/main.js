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

// Onload event
window.addEventListener("load", function () {
  inputText.value = "";
  outputText.innerHTML = outputFirstMessage;
  alertText.innerHTML = alertMsg.noText;
});

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
}

inputText.addEventListener(
  "input",
  () => {
    isSomeTextHere();
    replyInputOnOutput();
  },
  false
);

// When you encrypt text...
function encrypt() {
  const initialText = inputText.value;

  const encryptString = initialText.replace(/[aeiou]/g, (match) => {
    return encryptConditions[match];
  });

  outputText.innerHTML = encryptString;
}

btnEncrypt.addEventListener("click", encrypt, false);

// When you decrypt text...
function decrpyt() {
  const initialText = inputText.value;
  const keys = Object.keys(encryptConditions);
  const regex = new RegExp(`(${keys.join("|")})`, "g");

  const decryptedString = initialText.replace(regex, function (match) {
    return encryptConditions[match];
  });

  outputText.innerHTML = decryptedString;
}

btnDecrypt.addEventListener("click", decrpyt, false);
/**
 * 1. La letra "e" es convertida para "enter"
 * 2. La letra "i" es convertida para "imes"
 * 3. La letra "a" es convertida para "ai"
 * 4. La letra "o" es convertida para "ober"
 * 5. La letra "u" es convertida para "ufat"
 */
