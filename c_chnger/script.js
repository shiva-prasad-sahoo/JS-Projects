// script.js

// Select button
const btn = document.getElementById("clrcng");

// On click, change background to a random color
btn.addEventListener("click", () => {
  const rndm = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = rndm;
});
                                                             