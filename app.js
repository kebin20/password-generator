// Global variable
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const button = document.querySelector("#generate");
const passwordOne = document.querySelector(".passwordOne");
const passwordTwo = document.querySelector(".passwordTwo");

button.addEventListener("click", () => {
  passwordOne.textContent = generatePassword();
  passwordTwo.textContent = generatePassword();
});

function randomCharacters() {
  return characters[Math.floor(Math.random() * characters.length)];
}

function generatePassword() {
  let random = randomCharacters();
  for (let i = 0; i < 15; i++) {
    random += randomCharacters();
  }
  return random;
}

// Copy Passwords to clipboard
passwordOne.addEventListener("click", () => {
  document.execCommand("copy");
  showToolTip();
  setTimeout(() => {
    removeToolTip();
  }, 1000);
});

passwordOne.addEventListener("copy", (e) => {
  e.preventDefault();
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", passwordOne.textContent);
    console.log(e.clipboardData.getData("text"));
  }
});

passwordTwo.addEventListener("click", () => {
  document.execCommand("copy");
  showToolTip();
  setTimeout(() => {
    removeToolTip();
  }, 1000);
});

passwordTwo.addEventListener("copy", (e) => {
  e.preventDefault();
  if (e.clipboardData) {
    e.clipboardData.setData("text/plain", passwordTwo.textContent);
    console.log(e.clipboardData.getData("text"));
  }
});

function showToolTip() {
  document.getElementById("tooltip").style.display = "block";
}

function removeToolTip() {
  document.getElementById("tooltip").style.display = "none";
}
