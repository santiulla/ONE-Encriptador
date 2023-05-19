// DOM elements
const resultDiv = document.getElementById("displayResult");
const standByGraphics = document.getElementById("standByGraphics");
const resultSuccessful = document.getElementById("resultSuccessful");
const encryptedText = document.getElementById("encryptedText");
const copyToClipboardBtn = document.getElementById("copyToClipboard");
const userInput = document.getElementById("userInput");
const encryptButton = document.getElementById("encryptButton");
const dencryptButton = document.getElementById("dencryptButton");
const emptyTextarea = document.getElementById("userInput");
const floatingMessage = document.getElementById("floatingMessage");

// Messages
const readyToEncryptMsg = document.createElement("h2");
readyToEncryptMsg.appendChild(
  document.createTextNode("Ready to Encrypt / Decrypt")
);
let isReadyToEncryptShowing = false;

// Event Listeners
encryptButton.addEventListener("click", handleEncrypt);
dencryptButton.addEventListener("click", handleDecrypt);
emptyTextarea.addEventListener("input", handleInputChange);
copyToClipboardBtn.addEventListener("click", handleCopyToClipboard);

// Encryption rules
const encryptionRules = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

// Functions

// Encryption function
function encryptor(text) {
  const toArray = text.toLowerCase().split("");
  const encryptedArray = toArray.map(
    (letter) => encryptionRules[letter] || letter
  );
  const encryptedString = encryptedArray.join("");
  displayResult(encryptedString, "encrypted");
}

// Decryption function
function dencryptor(text) {
  const decryptedString = text
    .toLowerCase()
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  displayResult(decryptedString, "decrypted");
}

// Handle encryption button click
function handleEncrypt() {
  if (userInput.value !== "") encryptor(userInput.value);
}

// Handle decryption button click
function handleDecrypt() {
  if (userInput.value !== "") dencryptor(userInput.value);
}

// Handle input change in textarea
function handleInputChange() {
  const text = userInput.value;
  const animationDuration = 500;

  if (text.length === 0) {
    fadeInAndAppear(standByGraphics, animationDuration);
  } else if (text.length === 1) {
    //lll
    fadeOutAndDisappear(standByGraphics, animationDuration);
    clearResult();
  }
}

// Display the result
function displayResult(result, button) {
  clearResult();

  //here
  resultDiv.style.display = "flex";

  resultSuccessful.innerHTML = `Well done, here is your ${button} text`;
  resultSuccessful.style.marginTop = "2em";

  encryptedText.innerText = result;
  copyToClipboardBtn.style.display = "block";
}

// Clear the result
function clearResult() {
  if (isReadyToEncryptShowing) {
    resultDiv.removeChild(readyToEncryptMsg);
    isReadyToEncryptShowing = false;
  }

  resultSuccessful.innerHTML = "";
  encryptedText.innerText = "";
  copyToClipboardBtn.style.display = "none";
}

// Fade in and appear an element
function fadeInAndAppear(element, duration) {
  setTimeout(() => {
    resultDiv.style.display = "none";
    element.style.display = "block";
    resultDiv.removeChild(readyToEncryptMsg);
    isReadyToEncryptShowing = false;
  }, duration);
  setTimeout(() => {
    element.style.opacity = "1";
  }, duration + 100);
}

// Fade out and disappear an element
function fadeOutAndDisappear(element, duration) {
  element.style.transition = `all ${duration}ms ease-in-out`;
  element.style.opacity = "0";

  setTimeout(() => {
    element.style.display = "none";
    resultDiv.style.display = "flex";
    resultDiv.appendChild(readyToEncryptMsg);
    isReadyToEncryptShowing = true;
  }, duration + 100);
}

// Copy the text to clipboard
function handleCopyToClipboard() {
  copyToClipboard(encryptedText.textContent);
}

// Copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
      showFloatingMessage("Text copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
      showFloatingMessage("Failed to copy text");
    });
}

// Show a floating message
function showFloatingMessage(message) {
  floatingMessage.textContent = message;
  floatingMessage.style.display = "block";

  setTimeout(() => {
    floatingMessage.style.display = "none";
  }, 2000); // Hide after 2 seconds
}
