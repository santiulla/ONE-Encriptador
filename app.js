// convert text into an array separated by spaces
function encryptor(text) {
  let toArray = text.toLowerCase().split("");

  // every array to be encrypted

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
  displayResult(encryptedString);
}

function dencryptor(text) {
  dencryptedString = text
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  displayResult(dencryptedString);
}

// declare sideResult DOMS
const resultDOM = document.getElementById("displayResult");
let standByGraphics = document.getElementById("standByGraphics");

// trigger result
function displayResult(result) {
  resultDOM.innerText = result;
  standByGraphics.style.display = none;
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
    }, duration + 100);
  }

  //logic
  if (text.length === 0) {
    fadeInAnAppear(standByGraphics, animationDuration);
  } else if (text.length === 1) {
    fadeOutAndDisappear(standByGraphics, animationDuration);
  }
}

//show the result in the HTML

// testing App

// const test = "i'm testing something";

// console.log(encryptor(test));
// console.log(dencryptor(encryptor(test)));
