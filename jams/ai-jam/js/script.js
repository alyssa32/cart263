/**
 * Title of Project
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";

let introductionDisplay = {
  r: 177,
  g: 209,
  b: 140,
};
let simulationDisplay = {
  r: 149,
  g: 181,
  b: 112,
};
// The user's webcam
let video = undefined;
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
 * Description of preload
 */
function preload() {}
/**
 * Sets up the face mesh model and camera
 */
function setup() {
  createCanvas(1450, 820);
  //Access the user's webcam
  video = createCapture(VIDEO);
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
  // ======================== STATES =========================
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
}
/**
 * Displays the losing end screen
 */
function keyPressed() {
  if (state === "INTRODUCTION") {
    state = "SIMULATION";
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
  // Light green background
  background(
    introductionDisplay.r,
    introductionDisplay.g,
    introductionDisplay.b
  );
}
/**
 * Displays the simulation state
 */
function simulation() {
  // Light green background
  background(simulationDisplay.r, simulationDisplay.g, simulationDisplay.b);
  for (let result of results) {
    const data = result.scaledMesh;
    facePoint.x = int(data[currentPos][0]);
    facePoint.y = int(data[currentPos][1]);
    //Draw a circle in the nose coordinates
    ellipse(data[currentPos][0], data[currentPos][1], 40, 40);
  }
}
/**
 * Displays the winning end screen
 */
function win() {}
/**
 * Displays the losing end screen
 */
function lose() {}
