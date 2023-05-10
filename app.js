// get the text from input

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

  return encriptedArray.join("");
}

function desencriptor(text) {
  return text
    .toLowerCase()
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
}

const test = "i'm testing something";

console.log(encriptor(test));

console.log(desencriptor(encriptor(test)));
