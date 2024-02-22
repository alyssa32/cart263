/**
 * Title of Project
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
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
  facemesh = ml5.faceApi(video, { flipHorizontal: true }, modelLoaded);
}
/**
 * Draws the black background and assigns functions to states
 */
function draw() {
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
function introduction() {}
/**
 * Displays the simulation state
 */
function simulation() {}
/**
 * Displays the winning end screen
 */
function win() {}
/**
 * Displays the losing end screen
 */
function lose() {}
