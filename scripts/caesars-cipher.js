let originalInput = document.querySelector("#original");
let shiftInput = document.querySelector("#shift");
let encryptedInput = document.querySelector("#encrypted");

let originalMessage = originalInput.value;
originalInput.addEventListener("input", characterEntered, false);

originalInput.addEventListener("input", characterEntered, false);
shiftInput.addEventListener("input", numberEntered, false);

function characterEntered(e) {
  // Ensure we only deal with lowercase letters
  originalMessage = e.target.value;
  originalMessage = originalMessage.replace(/[^a-zA-Z]/g, '');

  e.target.value = originalMessage;

  // Let's get the party started!
  startEncryption();
}

function numberEntered(e) {
  startEncryption();
}

function startEncryption() {
  let encryptedMessage = "";
  let shift = shiftInput.value ? Number(shiftInput.value) : 0;
  console.log(shift);

  for (letter of originalMessage) {
    encryptedMessage += shiftLetter(letter, shift);
  }

  console.log(encryptedMessage);
  encryptedInput.value = encryptedMessage;
}
startEncryption();

function shiftLetter(letter, shift) {
  let newLetter = "";

  let letterCode = letter.charCodeAt(0);
  let newLetterCode = letterCode + (shift % 26);

  if (newLetterCode < 97) {
    // If new letter goes below "a" aka character code 97
    newLetterCode += 26;
  } else if (newLetterCode > 122) {
    // If new letter goes past "z" aka character code 122
    newLetterCode -= 26;
  }

  newLetter = String.fromCharCode(newLetterCode);
  
  return newLetter;
}
