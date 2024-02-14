/**
 * Adopt a Bot
 * Alyssa Durdey
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
  x: 600,
  y: 160,
  r: 145,
  g: 183,
  b: 186,
  size: 30,
};
//Robot Image properties
let standing = {
  x: 120,
  y: 100,
  w: 1000,
  h: 760,
};
let confused = {
  x: 120,
  y: 100,
  w: 1000,
  h: 760,
};
let waving = {
  x: 120,
  y: 100,
  w: 1000,
  h: 760,
};
let sitting = {
  x: 120,
  y: 160,
  w: 1000,
  h: 760,
};
let evil = {
  x: 120,
  y: 100,
  w: 1000,
  h: 760,
};
//Paper Image properties
let crumpledPaper = {
  x: 1000,
  y: 650,
  w: 100,
  h: 100,
};
let uncrumpledPaper = {
  x: 870,
  y: 200,
  w: 500,
  h: 550,
};
//Speach instructions on paper
let note = {
  string1: `What a cute little robot!\n Can it do any tricks? \n \n sit? \n stand? \n say hello? \n turn off/on?`,
  string2: `It can't be evil... can it?`,
  x1: 1110,
  y1: 480,
  x2: 960,
  y2: 710,
  r: 92,
  g: 89,
  b: 68,
  size1: 35,
  size2: 7,
};
//Images
let standingRobotImg;
let confusedRobotImg;
let wavingRobotImg;
let sittingRobotImg;
let evilRobotImg;
let paperImg;
let crumpledPaperImg;
let offRobotImg;

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = `Say "Hello"!`;
let paperCrumpled = true;

/**
 * Preloads all my used images
 */
function preload() {
  //Images
  standingRobotImg = loadImage("assets/images/standing.PNG");
  confusedRobotImg = loadImage("assets/images/confused.PNG");
  wavingRobotImg = loadImage("assets/images/hello.PNG");
  sittingRobotImg = loadImage("assets/images/sitting.PNG");
  evilRobotImg = loadImage("assets/images/evilBot.png");
  offRobotImg = loadImage("assets/images/off.png");
  paperImg = loadImage("assets/images/paper.png");
  crumpledPaperImg = loadImage("assets/images/crumpledPaper.png");
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
 * Draws the black background colour and displays the speech input
 */
function draw() {
  //Draws the black background
  background(0, 0, 0);
  //Displays the speech audio input in blue
  fill(textDisplay.r, textDisplay.g, textDisplay.b);
  textAlign(CENTER, CENTER);
  textSize(textDisplay.size);
  text(currentSpeech, textDisplay.x, textDisplay.y);
  //Calls the function do display robot images
  changeImage();
  //Calls the function to display the paper images
  paperDisplay();
}
/**
 * Calls to display audio input text
 */
function handleSpeechInput() {
  currentSpeech = speechRecognizer.resultString.toLowerCase();
  console.log(speechRecognizer.resultString);
}
/**
 * Displays the appropriate image once called
 */
function changeImage() {
  let wordToFind = speechRecognizer.resultString;
  tint(255, 255);
  if (wordToFind === "hello") {
    image(wavingRobotImg, waving.x, waving.y, waving.w, waving.h);
  } else if (wordToFind === "sit") {
    image(sittingRobotImg, sitting.x, sitting.y, sitting.w, sitting.h);
  } else if (wordToFind === "stand") {
    image(standingRobotImg, standing.x, standing.y, standing.w, standing.h);
  } else if (wordToFind === "evil") {
    image(evilRobotImg, evil.x, evil.y, evil.w, evil.h);
  } else if (wordToFind === "off") {
    image(offRobotImg, standing.x, standing.y, standing.w, standing.h);
  } else if (wordToFind === "on") {
    image(standingRobotImg, standing.x, standing.y, standing.w, standing.h);
  } else {
    image(confusedRobotImg, confused.x, confused.y, confused.w, confused.h);
  }
}
/**
 * Displays the appropriate paper image
 */
function paperDisplay() {
  if (paperCrumpled === true) {
    // Display at half opacity
    tint(120, 100);
    image(
      crumpledPaperImg,
      crumpledPaper.x,
      crumpledPaper.y,
      crumpledPaper.w,
      crumpledPaper.h
    );
  } else if (paperCrumpled === false) {
    image(
      paperImg,
      uncrumpledPaper.x,
      uncrumpledPaper.y,
      uncrumpledPaper.w,
      uncrumpledPaper.h
    );
    textSize(note.size1);
    fill(note.r, note.g, note.b);
    text(note.string1, note.x1, note.y1);
    textSize(note.size2);
    text(note.string2, note.x2, note.y2);
  }
}
/**
 * Changes the 'paperCrumpled' statement to 'true' or 'false' when clicked on
 */
function mousePressed() {
  if (paperCrumpled === true) {
    paperCrumpled = false;
  } else if (paperCrumpled === false) {
    paperCrumpled = true;
  }
  console.log(paperCrumpled);
}
