// convert text into an array separated by spaces
function encryptor(text) {
  console.log("encryptor");
  let toArray = text.toLowerCase().split("");

  // loop
  let encryptedArray = toArray.map((letter) => {
    //rules
    if (letter === "a") {
      return (letter = "ai");
    }

    if (letter === "e") {
      return (letter = "enter");
    }

    if (letter === "i") {
      return (letter = "imes");
    }

    if (letter === "o") {
      return (letter = "ober");
    }

    if (letter === "u") {
      return (letter = "ufat");
    } else {
      return letter;
    }
  });

  encryptedString = encryptedArray.join("");
  displayResult(encryptedString, "encrypted");
}

function dencryptor(text) {
  dencryptedString = text
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  displayResult(dencryptedString, "decrypted");
}

// declare sideResult DOMS
const resultDiv = document.getElementById("displayResult");
const standByGraphics = document.getElementById("standByGraphics");
const resultSuccessful = document.getElementById("resultSuccessful");
const encryptedText = document.getElementById("encryptedText");
const copyToClipboard = document.getElementById("copyToClipboard");

// Add "ready to encrypt" message when writing

const readyToEncryptMsg = document.createElement("h2");
readyToEncryptMsg.appendChild(
  document.createTextNode("Ready to Encrypt / Decrypt")
);
let isReadyToEncryptShowing = false;

// To trigger the message use the below
// resultDiv.appendChild(readyToEncryptMsg);

// Show result
function displayResult(result, button) {
  //remove ready to encript message
  if (isReadyToEncryptShowing) {
    resultDiv.removeChild(readyToEncryptMsg);
    isReadyToEncryptShowing = false;
  }
  //result successful title
  const resultSuccessfulText = `Well done, here is your ${button} text`;
  resultSuccessful.innerHTML = resultSuccessfulText;
  // show result
  encryptedText.innerText = result;
}

// get submit button and launch encryptor function
const userInput = document.getElementById("userInput");

let encryptButton = document.getElementById("encryptButton");
encryptButton.addEventListener("click", function () {
  encryptor(userInput.value);
});

let dencryptButton = document.getElementById("dencryptButton");
dencryptButton.addEventListener("click", function () {
  dencryptor(userInput.value);
});

// change icons when is empty

const emptyTextarea = document.getElementById("userInput");
emptyTextarea.addEventListener("input", emptyGraphics);

function emptyGraphics() {
  //parameters
  const text = this.value;
  const animationDuration = 500;

  //functions
  function fadeInAnAppear(element, duration) {
    setTimeout(function () {
      element.style.display = "block";
      resultDiv.removeChild(readyToEncryptMsg);
      isReadyToEncryptShowing = false;
    }, duration);
    setTimeout(function () {
      element.style.opacity = "1";
    }, duration + 100);
  }

  function fadeOutAndDisappear(element, duration) {
    console.log(userInput.value.length);
    element.style.transition = "all " + duration + "ms ease-in-out";
    element.style.opacity = "0";

    setTimeout(function () {
      element.style.display = "none";

      resultDiv.appendChild(readyToEncryptMsg);
      isReadyToEncryptShowing = true;
    }, duration + 100);
  }

  //logic
  if (text.length === 0) {
    fadeInAnAppear(standByGraphics, animationDuration);
  } else if (text.length === 1) {
    fadeOutAndDisappear(standByGraphics, animationDuration);
    resultSuccessful.innerHTML = "";
    encryptedText.innerText = "";
  }
}

//show the result in the HTML

// testing App

// const test = "i'm testing something";

// console.log(encryptor(test));
// console.log(dencryptor(encryptor(test)));
