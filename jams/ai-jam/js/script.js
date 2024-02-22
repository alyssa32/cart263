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
const STATE = {
  STARTUP: `STARTUP`,
  DETECTING: `DETECTING`,
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
 * Description of setup
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
 * Description of draw()
 */
function draw() {
  background(0);
}
/**
 * Sets up the state once the face model is loaded
 */
function modelLoaded() {
  // Is ready to switch between state once facemodel is loaded
  state = STATE.DETECTING;
  // Will detect the face
  facemesh.on("face", handleFaceDetection);
}
