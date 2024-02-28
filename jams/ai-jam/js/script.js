/**
 * Bear-y Hungry
 * Alyssa Durdey
 *
 * This game uses an AI facemesh model to allow the player to control the cursor with their nose. The idea of this game is
 * that the user is a bear, searching for their meals.With their head movements, the user must navigate to the given
 * coordinates to locate the food. There are no visual indications of this point, only its coordinates. The plays must
 * also avoid beehives which are hidden as well, so it is a chance of luck.
 */

"use strict";

let introductionDisplay = {
  r: 18,
  g: 13,
  b: 1,
  string1:
    "As a bear, you are an animal with a remarkable \n sense of smell. Use your nose to locate your next \n meal with the help of the given coordinates. \n \n However, there are hidden beehives scattered \n around the forest you must avoid. The honey is \n tempting, but the bees will show no mercy.",
  x1: 320,
  y1: 110,
  size1: 24,
  string2: "Press                     to begin",
  x2: 320,
  y2: 430,
  size2: 20,
};
let simulationDisplay = {
  r: 149,
  g: 181,
  b: 112,
  size: 17,
  x1: 40,
  y1: 50,
  x2: 40,
  y2: 90,
};
let winDisplay = {
  string:
    "Beary good! \n You found your way to Jonathan's \ncompost bin, dig in!",
  x: 310,
  y: 160,
  size: 24,
  signX: 90,
  signY: 100,
  signW: 450,
  signH: 190,
};
let loseDisplay = {
  string: "Ouch! \n Your nose found its way \n into a beehive",
  x: 310,
  y: 160,
};
let forestDay = {
  x: 0,
  y: 0,
  w: 640,
  h: 480,
};
let smallWoodenSign = {
  x: 0,
  y: 10,
  w: 380,
  h: 120,
};
let nose = {
  size: 30,
};
let hiddenFood = {
  x: 550,
  y: 400,
  size: 5,
};
let hiddenBeehive = {
  x: 500,
  y: 380,
  size: 20,
};
let bees = {
  x: 370,
  y: 220,
  w: 210,
  h: 140,
};
let banana = {
  x: 340,
  y: 210,
  w: 210,
  h: 140,
};
// My images
let forestDayImg;
let forestMorningImg;
let forestNightImg;
let woodenSignImg;
let smallWoodenSignImg;
let beesImg;
let bananaImg;
// The user's webcam
let video;
// The Face model
let facemesh = undefined;
// The current set of predictions
let results = [];
// All my states
const STATE = {
  STARTUP: `STARTUP`,
  INTRODUCTION: `INTRODUCTION`,
  SIMULATION: `SIMULATION`,
  WIN: `WIN`,
  LOSE: `LOSE`,
};
//The first state being the STARTUP state
let state = STATE.STARTUP;
let currentPos = 1;
let facePoint = {
  location: "none",
  x: 0,
  y: 0,
  position: currentPos,
};
/**
 * Preloads the images used
 */
function preload() {
  // Gets my images from the folder
  forestDayImg = loadImage("assets/images/forestDay.PNG");
  forestMorningImg = loadImage("assets/images/forestMorning.jpg");
  forestNightImg = loadImage("assets/images/forestNight.jpg");
  woodenSignImg = loadImage("assets/images/woodenSign.png");
  smallWoodenSignImg = loadImage("assets/images/smallWoodenSign.png");
  beesImg = loadImage("assets/images/bees.png");
  bananaImg = loadImage("assets/images/banana.png");
}
/**
 * Sets up the face mesh model and camera
 */
function setup() {
  createCanvas(640, 480);
  //Access the user's webcam
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  //load the face model
  facemesh = ml5.facemesh(video, modelLoaded);
}
/**
 * Draws the black background and assigns functions to states
 */
function draw() {
  // Draws the black background
  background(0);
  // Calls the appropriate function for each state
  if (state === "STARTUP") {
    startUp();
  } else if (state === "INTRODUCTION") {
    introduction();
  } else if (state === "SIMULATION") {
    simulation();
  } else if (state === "WIN") {
    win();
  } else if (state === "LOSE") {
    lose();
  }
  console.log(state);
  // Calls the function to switch states once the user arrives at the coordinates
  foundCoordinates();
}
// ======================== SWITCHING STATES =====================================================
/**
 * Switches the state when the "Enter" key is pressed
 */
function keyPressed() {
  // Switches to the SIMULATION state if the user is currently in INTRODUCTION
  if (state === "INTRODUCTION" && keyCode === ENTER) {
    state = "SIMULATION";
  }
}
/**
 * Switches to the winning state when the user's nose matches the given coordinates
 */
function foundCoordinates() {
  let d = dist(hiddenFood.x, hiddenFood.y, facePoint.x, facePoint.y);
  // If the nose radius and touches the hidden coordinates, switch to the "WIN" state
  if (d < hiddenFood.size / 2 + nose.size / 2) {
    state = "WIN";
  }
  let d2 = dist(hiddenBeehive.x, hiddenBeehive.y, facePoint.x, facePoint.y);
  // If the nose radius and touches the hidden coordinates, switch to the "LOSE" state
  if (d2 < hiddenBeehive.size / 2 + nose.size / 2) {
    state = "LOSE";
  }
}
/**
Called by Facemesh when it sees a face, just stores the data in results
so we can see it in detecting()
*/
function handleFaceDetection(data) {
  if (data.length > 0) {
    console.log(data);
    results = data;
  }
}
/**
 * Sets up the state once the face model is loaded
 */
function modelLoaded() {
  // Is ready to switch between state once facemodel is loaded
  state = STATE.INTRODUCTION;
  // Will detect the face
  facemesh.on("face", handleFaceDetection);
}
// ======================== STATES =====================================================
/**
 * Displays the starting up screen
 */
function startUp() {
  background(0);
  push();
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Loading Your Bear Nose...`, width / 2, height / 2);
  pop();
}
/**
 * Displays the introduction state
 */
function introduction() {
  // Forest BG Image
  image(forestDayImg, forestDay.x, forestDay.y, forestDay.w, forestDay.h);
  // Blur's the bg image
  filter(BLUR, 4);
  // Wooden Sign Image
  image(woodenSignImg, -20, 10, 660, 470);
  // Into ext on wooden sign
  textSize(introductionDisplay.size1);
  textAlign(CENTER);
  fill(introductionDisplay.r, introductionDisplay.g, introductionDisplay.b);
  text(
    introductionDisplay.string1,
    introductionDisplay.x1,
    introductionDisplay.y1
  );
  textSize(introductionDisplay.size2);
  text(
    introductionDisplay.string2,
    introductionDisplay.x2,
    introductionDisplay.y2
  );
}
/**
 * Displays the simulation state
 */
function simulation() {
  // Forest BG Image
  image(forestDayImg, forestDay.x, forestDay.y, forestDay.w, forestDay.h);
  //Detects the nose position of the user
  for (let result of results) {
    const data = result.scaledMesh;
    facePoint.x = int(data[currentPos][0]);
    facePoint.y = int(data[currentPos][1]);
    //Draw a circle in the nose coordinates
    fill(0);
    circle(data[currentPos][0], data[currentPos][1], nose.size);
  }
  // Image of the small wooden sign
  image(
    smallWoodenSignImg,
    smallWoodenSign.x,
    smallWoodenSign.y,
    smallWoodenSign.w,
    smallWoodenSign.h
  );
  // Displays the coordinate the user is aiming to reach
  fill(introductionDisplay.r, introductionDisplay.g, introductionDisplay.b);
  textSize(simulationDisplay.size);
  textAlign(LEFT);
  text(
    "You detected something at X: 550  Y: 400",
    simulationDisplay.x1,
    simulationDisplay.y1
  );
  // Displays the nose's current coordinates
  text(
    "You are at X: " + facePoint.x + " Y: " + facePoint.y,
    simulationDisplay.x2,
    simulationDisplay.y2
  );
  // Transparent circle which the user must collide with, with their nose
  noFill();
  noStroke();
  circle(hiddenFood.x, hiddenFood.y, hiddenFood.size);
  // Transparent circles which the user must avoid (acts as hidden bee hives)
  circle(hiddenBeehive.x, hiddenBeehive.y, hiddenBeehive.size);
}
/**
 * Displays the winning end screen
 */
function win() {
  // Forest BG Image
  image(forestDayImg, forestDay.x, forestDay.y, forestDay.w, forestDay.h);
  // Blur's the bg image
  filter(BLUR, 4);
  // Displays the small wooden sign image
  image(
    smallWoodenSignImg,
    winDisplay.signX,
    winDisplay.signY,
    winDisplay.signW,
    winDisplay.signH
  );
  fill(introductionDisplay.r, introductionDisplay.g, introductionDisplay.b);
  textSize(winDisplay.size);
  textAlign(CENTER);
  text(winDisplay.string, winDisplay.x, winDisplay.y);
  image(bananaImg, banana.x, banana.y, banana.w, banana.h);
}
/**
 * Displays the losing end screen
 */
function lose() {
  // Forest BG Image
  image(forestDayImg, forestDay.x, forestDay.y, forestDay.w, forestDay.h);
  // Blur's the bg image
  filter(BLUR, 4);
  // Displays the small wooden sign image
  image(
    smallWoodenSignImg,
    winDisplay.signX,
    winDisplay.signY,
    winDisplay.signW,
    winDisplay.signH
  );
  fill(introductionDisplay.r, introductionDisplay.g, introductionDisplay.b);
  textSize(winDisplay.size);
  textAlign(CENTER);
  text(loseDisplay.string, loseDisplay.x, loseDisplay.y);
  image(beesImg, bees.x, bees.y, bees.w, bees.h);
}
