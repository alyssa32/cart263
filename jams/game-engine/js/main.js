"use strict";

let config = {
  // The type refers to the kind of display we'll be using
  type: Phaser.AUTO,
  width: 1420,
  height: 792,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 900 },
      debug: true,
    },
  },
  // The scene property has an array of the different scenes
  scene: [Boot, Play],
};

// Creates the game using this configuration!
let game = new Phaser.Game(config);
