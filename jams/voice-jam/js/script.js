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
//Robot Image properties
let standing = {
  x: 250,
  y: 100,
  w: 1000,
  h: 800,
};

let standingRobotImg;
let confusedRobotImg;

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = "?";
/**
 * Preloads all my used images
 */
function preload() {
  //Images
  standingRobotImg = loadImage("assets/images/standing.gif");
  confusedRobotImg = loadImage("assets/images/confused.gif");
}

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
  image(standingRobotImg, standing.x, standing.y, standing.w, standing.h);
}

function handleSpeechInput() {
  if (speechRecognizer.resultString === "stand") {
  }
}
