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
let textDisplay = {
  r: 145,
  g: 183,
  b: 186,
  size: 30,
};
//Robot Image properties
let standing = {
  x: 230,
  y: 60,
  w: 1000,
  h: 760,
};
let confused = {
  x: 230,
  y: 60,
  w: 1000,
  h: 760,
};

let standingRobotImg;
let confusedRobotImg;
let wavingRobotImg;
let sittingRobotImg;

const speechRecognizer = new p5.SpeechRec();
// const robotCommands = [
//   {
//     "command": ["stand"],
//     "callback": standing,
//     image: "standingRobotImg",
//   },
// ];
let currentSpeech = `?`;
/**
 * Preloads all my used images
 */
function preload() {
  //Images
  standingRobotImg = loadImage("assets/images/standing.gif");
  confusedRobotImg = loadImage("assets/images/confused.gif");
  wavingRobotImg = loadImage("assets/images/hello.gif");
  sittingRobotImg = loadImage("assets/images/sitting.gif");
}
/**
 * Creates the canvas and sets up the speech recognizer
 */
function setup() {
  createCanvas(canvas.x, canvas.y);
  //What is does when it hears something
  speechRecognizer.onResult = handleSpeechInput;
  //Will continuously keep listening for audio
  speechRecognizer.continuous = true;
  speechRecognizer.interimResults = true;
  //Asks for permission
  speechRecognizer.start();
}
/**
 * Draws the black background colour
 */
function draw() {
  //Draws the black background
  background(0, 0, 0);
  textAlign(CENTER, CENTER);
  textSize(textDisplay.size);
  text(currentSpeech, width / 2, height / 5);
  fill(textDisplay.r, textDisplay.g, textDisplay.b);
}
//Calls to display audio input text
function handleSpeechInput() {
  currentSpeech = speechRecognizer.resultString;
  console.log(speechRecognizer.resultString);
  // if (speechRecognizer.resultString.toLowerCase() === `stand`) {
  //   image(standingRobotImg, standing.x, standing.y, standing.w, standing.h);
  // } else if (speechRecognizer.resultString.toLowerCase() === `stand`) {
  //   image(confusedRobotImg, standing.x, standing.y, standing.w, standing.h);
  // }
}
