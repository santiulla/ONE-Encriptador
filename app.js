// Convert text into an array separated by spaces
function encryptor(text) {
  let toArray = text.toLowerCase().split("");

  // Loop through the array and apply encryption rules
  let encryptedArray = toArray.map((letter) => {
    // Encryption rules
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

  // Join the encrypted array back into a string
  let encryptedString = encryptedArray.join("");

  // Display the encrypted result
  displayResult(encryptedString, "encrypted");
}

// Decrypt the encrypted text
function dencryptor(text) {
  // Decrypt by replacing the encrypted patterns with the original letters
  let decryptedString = text
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  // Display the decrypted result
  displayResult(decryptedString, "decrypted");
}

// Declare DOM elements for displaying results
const resultDiv = document.getElementById("displayResult");
const standByGraphics = document.getElementById("standByGraphics");
const resultSuccessful = document.getElementById("resultSuccessful");
const encryptedText = document.getElementById("encryptedText");
const copyToClipboardBtn = document.getElementById("copyToClipboard");

// Create a "Ready to Encrypt / Decrypt" message
const readyToEncryptMsg = document.createElement("h2");
readyToEncryptMsg.appendChild(
  document.createTextNode("Ready to Encrypt / Decrypt")
);
let isReadyToEncryptShowing = false;

// To trigger the message, use the following line:
// resultDiv.appendChild(readyToEncryptMsg);

// Show the encrypted or decrypted result
function displayResult(result, button) {
  // Remove the "Ready to Encrypt / Decrypt" message
  if (isReadyToEncryptShowing) {
    resultDiv.removeChild(readyToEncryptMsg);
    isReadyToEncryptShowing = false;
  }

  // Set the result successful title
  const resultSuccessfulText = `Well done, here is your ${button} text`;
  resultSuccessful.innerHTML = resultSuccessfulText;

  // Display the result
  encryptedText.innerText = result;

  // Show the "Copy to Clipboard" button
  copyToClipboardBtn.style.display = "block";
}

// Get the user input and launch encryptor function
const userInput = document.getElementById("userInput");

let encryptButton = document.getElementById("encryptButton");
encryptButton.addEventListener("click", function () {
  encryptor(userInput.value);
});

let dencryptButton = document.getElementById("dencryptButton");
dencryptButton.addEventListener("click", function () {
  dencryptor(userInput.value);
});

// Change icons when the textarea is empty
const emptyTextarea = document.getElementById("userInput");
emptyTextarea.addEventListener("input", emptyGraphics);

function emptyGraphics() {
  const text = this.value;
  const animationDuration = 500;

  function fadeInAndAppear(element, duration) {
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
    element.style.transition = "all " + duration + "ms ease-in-out";
    element.style.opacity = "0";

    setTimeout(function () {
      element.style.display = "none";

      resultDiv.appendChild(readyToEncryptMsg);
      isReadyToEncryptShowing = true;
    }, duration + 100);
  }

  // Check the length of the input text and apply appropriate graphics
  if (text.length === 0) {
    fadeInAndAppear(standByGraphics, animationDuration);
  } else if (text.length === 1) {
    fadeOutAndDisappear(standByGraphics, animationDuration);
    resultSuccessful.innerHTML = "";
    encryptedText.innerText = "";
    copyToClipboardBtn.style.display = "none";
  }
}

// Copy the encrypted or decrypted text to clipboard
copyToClipboardBtn.addEventListener("click", () => {
  copyToClipboard(encryptedText.textContent);
});

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });

  showFloatingMessage("Text copied to clipboard");
}

// Show a floating message
function showFloatingMessage(message) {
  const floatingMessage = document.getElementById("floatingMessage");
  floatingMessage.textContent = message;
  floatingMessage.style.display = "block";

  setTimeout(function () {
    floatingMessage.style.display = "none";
  }, 2000); // Hide after 2 seconds
}
