class Play3 extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `play3`,
    });
  }
  cursors;
  floor;
  hiddenBlock;
  movingPlatformsWhite;
  players = [];
  currentPlayer;
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Adds the city background image
    this.city = this.add.image(710, 350, "city0").setScale(0.43);
    //Colours the background black
    this.cameras.main.setBackgroundColor("#ffffff");
    //Adds the text under the watering can
    this.add.text(680, 338, "2/2", {
      fontSize: "22px",
      fill: "#dedede",
    });
    //Calls functions
    this.player();
    this.blocks();
    this.onClick();
    this.water();
    //Calls to define cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  //*
  //Creates the Players and Asigns them Physics Properties
  //*
  player() {
    // Creating Player 1
    this.players[0] = this.physics.add
      .sprite(100, 660, "player1")
      .setScale(0.05)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.players[0].depth = 100;
    //Sets Player 1 to be the first player to be played
    this.currentPlayer = this.players[0];
    // Creating Player 2
    this.players[1] = this.physics.add
      .sprite(40, 670, "player2")
      .setScale(0.035)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.players[1].depth = 100;
    //Prevents the players from being pushed
    this.players[0].setPushable(false);
    this.players[1].setPushable(false);
    // //Adds collisions between the players
    this.physics.add.collider(this.players[0], this.players[1]);
  }
  //*
  //Will perform actions if mouse is clicked
  //*
  onClick() {
    this.input.on("pointerdown", () => {
      if (this.currentPlayer === this.players[0]) {
        // Switches to player 1
        this.currentPlayer = this.players[1];
        //Changes background colour to black
        this.cameras.main.setBackgroundColor("#000000");
        //Changes ground to white
        this.add.rectangle(0, 753, 2850, 100, 0xffffff);
      } else {
        // Switches to player 0
        this.currentPlayer = this.players[0];
        //Changes background colour to white
        this.cameras.main.setBackgroundColor("#ffffff");
        //Changes ground to black
        this.add.rectangle(0, 753, 2850, 100, 0x000000);
      }
    });
  }
  //*
  //Creates the Platforms and Asigns them Physics Properties
  //*
  blocks() {
    //Adds physics properties to the ground
    this.floor = this.physics.add.staticGroup();
    this.floor.create(700, 860, "ground").setScale(15).refreshBody();
    //Creates the hidden rectangle the "next" sign sits on to prevent it from falling
    this.hiddenBlock = this.physics.add.staticGroup();
    this.hiddenBlock.create(700, 330, "ground2").setScale(0.01).refreshBody();
    //Draws a black rectangle over the ground
    var rect = this.add.rectangle(0, 753, 2850, 100, 0x000000);
    //Creates White Moving Platform 0 and adds physics
    this.movingPlatformsWhite = this.physics.add.image(700, 505, "groundWhite");
    this.movingPlatformsWhite.setImmovable(true);
    this.movingPlatformsWhite.body.allowGravity = false;
    this.movingPlatformsWhite.setVelocityY(50);
    //Adds collisions between the players and the platforms
    this.physics.add.collider(this.players, this.floor);
    this.physics.add.collider(this.players, this.movingPlatformsWhite);
  }
  //*
  //Has Everything to Do With the "Next" Sign"
  //*
  water() {
    //Displays the watering can image
    this.wateringCan = this.physics.add
      .sprite(655, 0, "wateringCan4")
      .setOrigin(0)
      .setScale(0.15)
      .setCollideWorldBounds(true);
    this.physics.add.collider(this.wateringCan, this.hiddenBlock);
    //Adds a collider between the can and the players
    this.physics.add.overlap(
      this.players[1],
      this.wateringCan,
      this.collectWater,
      null,
      this
    );
  }
  //*
  //Will Collect the sign when Collided with a Player
  //*
  collectWater(players, wateringCan) {
    wateringCan.disableBody(true, true);
    this.scene.start(`end`);
  }
  //*
  //Will constantly be called (draw() equivalent)
  //*
  update() {
    //Selected player will move left if the left arrow key is pressed
    if (this.cursors.left.isDown == true) {
      this.currentPlayer.setVelocityX(-160);
      //Selected player will move right if the left arrow key is pressed
    } else if (this.cursors.right.isDown == true) {
      this.currentPlayer.setVelocityX(160);
    } else {
      //If no arrows are pressed, the player will not move left or right
      this.currentPlayer.setVelocityX(0);
    } //Selected player will move upwards if the up arrow key is pressed and if the player is NOT already in the air
    if (this.cursors.up.isDown == true && this.currentPlayer.body.onFloor()) {
      this.currentPlayer.setVelocityY(-330);
      window.showit = true;
    }
    //White Platform Movements
    if (this.movingPlatformsWhite.y >= 590) {
      this.movingPlatformsWhite.setVelocityY(-50);
    } else if (this.movingPlatformsWhite.y <= 490) {
      this.movingPlatformsWhite.setVelocityY(50);
    }
  }
}
