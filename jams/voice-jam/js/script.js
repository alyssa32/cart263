/**
 * Title of Project
 * Author Name
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
let canvas = {
  x: 1450,
  y: 850,
};
const speechRecognizer = new p5.SpeechRec();
let currentSpeech = "?";
/**
 * Preloads all my used images
 */
function preload() {}

/**
 * Description of setup
 */
function setup() {
  createCanvas(canvas.x, canvas.y);
  speechRecognizer.onResult = handleSpeechInput;
  speechRecognizer.start();
}

/**
 * Description of draw()
 */
function draw() {
  background(0, 0, 0);
}

function handleSpeechInput() {}
