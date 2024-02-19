/**
 * Title of Project
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
//The user's webcam
let video = undefined;
//face model
let faceapi = undefined;

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
  faceapi = ml5.faceApi(video, { flipHorizontal: true }, function () {
    console.log("Model Loaded");
  });
}

/**
 * Description of draw()
 */
function draw() {
  background(0);
}
