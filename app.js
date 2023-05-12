// convert text into an array separated by spaces
function encriptor(text) {
  let toArray = text.toLowerCase().split("");

  // every array to be encripted

  // loop
  let encriptedArray = toArray.map((letter) => {
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

  encriptedString = encriptedArray.join("");
  displayResult(encriptedString);
}

function desencriptor(text) {
  desencriptedString = text
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  displayResult(desencriptedString);
}

// declare sideResult DOMS
const resultDOM = document.getElementById("displayResult");
const standByGraphics = document.getElementById("standByGraphics");

// trigger result
function displayResult(result) {
  resultDOM.innerText = result;
  standByGraphics.style.display = none;
}

// get submit button and launch encriptor function
const userInput = document.getElementById("userInput");

let encriptButton = document.getElementById("encriptButton");
encriptButton.addEventListener("click", function () {
  encriptor(userInput.value);
});

let desencriptButton = document.getElementById("desencriptButton");
desencriptButton.addEventListener("click", function () {
  desencriptor(userInput.value);
});

// change icons when is empty

const emptyTextarea = document.getElementById("userInput");
emptyTextarea.addEventListener("input", emptyGraphics);

function emptyGraphics() {
  let text = this.value;

  if (text === "") {
    standByGraphics.style.display = block;
  }
}

//show the result in the HTML

// testing App

// const test = "i'm testing something";

// console.log(encriptor(test));
// console.log(desencriptor(encriptor(test)));
