/**
 * Name That Animal!
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let recognizer = new p5.SpeechRec();

let bg = {
  r: 158,
  g: 219,
  b: 174,
};

/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  recognizer.onResult = handleResult;
  recognizer.start();

  createCanvas(800, 800);
}
/**
 * Description of draw()
 */
function draw() {
  background(bg.r, bg.g, bg.b);
}

function mousePressed() {}

function handleResult() {
  console.log(recognizer.resultString);
}
