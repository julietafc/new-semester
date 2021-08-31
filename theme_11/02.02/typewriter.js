"use strict";

let maxNumberOfIterations;
let iterator;
let h1 = document.getElementById("typewriter");
let words = h1.textContent;

initLoop();

function initLoop() {
  maxNumberOfIterations = words.length;
  iterator = 0;
  h1.textContent = "";
  loop();
}

function loop() {
  console.log("loop", words[iterator]);
  h1.textContent += words[iterator];
  iterator++;
  if (iterator < maxNumberOfIterations) {
    setTimeout(loop, 400);
  }
}
