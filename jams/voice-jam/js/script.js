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
  y: 100,
  w: 1000,
  h: 760,
};
let confused = {
  x: 230,
  y: 100,
  w: 1000,
  h: 760,
};
let sitting = {
  x: 230,
  y: 160,
  w: 1000,
  h: 760,
};
//Paper Image properties
let crumpledPaper = {
  x: 1100,
  y: 650,
  w: 100,
  h: 100,
};
let uncrumpledPaper = {
  x: 940,
  y: 200,
  w: 500,
  h: 550,
};
//Speach instructions on paper
let note = {
  string: `What a cute little robot!\n Can it do any tricks? \n \n sit? \n stand? \n say hello? \n \n It cannot be evil... can it?`,
  x: 1150,
  y: 480,
  r: 6,
  g: 42,
  b: 64,
  size: 30,
};
//Images
let standingRobotImg;
let confusedRobotImg;
let wavingRobotImg;
let sittingRobotImg;
let paperImg;
let crumpledPaperImg;

const speechRecognizer = new p5.SpeechRec();
let currentSpeech = `Say something...`;
let paperCrumpled = true;

//Array of Robot commands
const robotCommands = [
  {
    command: "stand",
    image: {
      standingRobotImage: standingRobotImg,
      x: 230,
      y: 100,
      w: 1000,
      h: 760,
    },
  },
  {
    command: "sit",
    image: {
      sittingRobotImage: sittingRobotImg,
      x: 230,
      y: 160,
      w: 1000,
      h: 760,
    },
  },
  {
    command: "hello",
    image: {
      wavingRobotImage: wavingRobotImg,
      x: 230,
      y: 160,
      w: 1000,
      h: 760,
    },
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
  fill(textDisplay.r, textDisplay.g, textDisplay.b);
  textAlign(CENTER, CENTER);
  textSize(textDisplay.size);
  text(currentSpeech, width / 2, height / 5);
  //Displays the initial robot standing image
  tint(255, 255);
  image(standingRobotImg, standing.x, standing.y, standing.w, standing.h);
  paperDisplay();
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
  for (const object of robotCommands) {
    if (wordToFind === object.command) {
      image: {
        object.image;
      }
    }
    //console.log(object.image);
    console.log(object.image.x);
  }
  //console.log("word to find " + wordToFind);
  // for (let i = 0; i < robotCommands.command.length; i++) {
  // if (
  //   speechRecognizer.resultString.toLowerCase() === robotCommands.command[i]
  // ) {
  //   image(command.image);
  //   break;
  // }
  //  // }
  //}
}
/**
 * Displays the appropriate paper image
 */
function paperDisplay() {
  if ((paperCrumpled = true)) {
    tint(120, 100); // Display at half opacity
    image(
      crumpledPaperImg,
      crumpledPaper.x,
      crumpledPaper.y,
      crumpledPaper.w,
      crumpledPaper.h
    );
  } else {
    image(
      paperImg,
      uncrumpledPaper.x,
      uncrumpledPaper.y,
      uncrumpledPaper.w,
      uncrumpledPaper.h
    );
    textSize(note.size);
    fill(note.r, note.g, note.b);
    text(note.string, note.x, note.y);
  }
}
/**
 * Changes the 'paperCrumpled' statement to 'true' or 'false' when clicked on
 */
function mousePressed() {
  if (crumpledPaperImg) {
    paperCrumpled = false;
  } else {
    if (paperImg) {
      paperCrumpled = true;
    }
  }
  console.log(paperCrumpled);
}
