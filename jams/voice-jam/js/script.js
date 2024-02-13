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
//Images
let standingRobotImg;
let confusedRobotImg;
let wavingRobotImg;
let sittingRobotImg;
let paperImg;
let crumpledPaperImg;

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = `?`;

let paperCrumpled = true;

//Array of Robot commands
const robotCommands = [
  {
    command: ["stand"],
    image: standingRobotImg,
  },
  {
    command: ["sit"],
    image: "sittingRobotImg",
  },
  {
    command: ["hello"],
    image: "wavingRobotImg",
  },
  {
    command: ["confused"],
    image: "confusedRobotImg",
  },
];
/**
 * Preloads all my used images
 */
function preload() {
  //Images
  standingRobotImg = loadImage("assets/images/standing.PNG");
  confusedRobotImg = loadImage("assets/images/confused.PNG");
  wavingRobotImg = loadImage("assets/images/hello.PNG");
  sittingRobotImg = loadImage("assets/images/sitting.PNG");
  paperImg = loadImage("assets/images/paper.png");
  crumpledPaperImg = loadImage("assets/images/paper.png");
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
  textAlign(CENTER, CENTER);
  textSize(textDisplay.size);
  text(currentSpeech, width / 2, height / 5);
  fill(textDisplay.r, textDisplay.g, textDisplay.b);
  //paperDisplay();
  onResult();
}
/**
 * Calls to display audio input text
 */
function handleSpeechInput() {
  currentSpeech = speechRecognizer.resultString;
  console.log(speechRecognizer.resultString);
}
/**
 * Displays the appropriate image once called
 */
function onResult() {
  let wordToFind = speechRecognizer.resultString;
  for (let object of robotCommands) {
    if (wordToFind === object.command) {
      //  image(object.image);
    }
    console.log(object.image);
  }
  console.log("word to find" + wordToFind);
  // for (let i = 0; i < robotCommands.command.length; i++) {
  // if (
  //   speechRecognizer.resultString.toLowerCase() === robotCommands.command[i]
  // ) {
  //   image(command.image);
  //   break;
  // }
  //  // }
}
//}
/**
 * Displays the appropriate image once called
 */
// function paperDisplay() {
//   if ((paperCrumpled = true)) {
//     image(paperCrumpledImg, 100, 100, 100, 100);
//   }
// }
