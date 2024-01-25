/**
 * Name That Animal!
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let recognizer = new p5.SpeechRec();

/**
 * Description of preload
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {}
recognizer.onResult = handleResult;
recognizer.start();
/**
 * Description of draw()
 */
function draw() {}

function mousePressed() {}

function handleResult() {
  console.log(recognizer.resultString);
}
