class Play extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `play`,
    });
  }
  cursors;
  platforms;
  movingPlatform;
  movingPlatform2;
  movingPlatformsBlack = [];
  player1;
  //let movingPlatforms = [];
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Creates the background
    this.background = this.add.image(0, -140, "whiteBackground").setOrigin(0);
    //Calls functions
    this.players();
    this.blocks();
    //Calls to define cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  //*
  //Everything that pertains to the characters
  //*
  players() {
    // Player 1
    this.player1 = this.physics.add
      .sprite(450, 110, "player1")
      .setScale(0.05)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.player1.depth = 100;
    //Makes the players not pushable
    this.player1.setPushable(false);
  }
  //*
  //Has Everything to do with Platforms
  //*
  blocks() {
    //Adds physics properties to the ground
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(700, 870, "ground").setScale(15).refreshBody();
    //Adds physics properties to the moving platforms
    this.movingPlatformsBlack[0] = this.physics.add.image(400, 400, "ground");
    this.movingPlatformsBlack[0].setImmovable(true);
    this.movingPlatformsBlack[0].body.allowGravity = false;
    this.movingPlatformsBlack[0].setVelocityX(50);
    //Second moving platform
    this.movingPlatformsBlack[1] = this.physics.add.image(500, 600, "ground");
    this.movingPlatformsBlack[1].setImmovable(true);
    this.movingPlatformsBlack[1].body.allowGravity = false;
    this.movingPlatformsBlack[1].setVelocityX(50);

    //Adds collisions between the players and the platforms
    this.physics.add.collider(this.player1, this.platforms);
    this.physics.add.collider(this.player1, this.movingPlatformsBlack);
  }
  //*
  //Will constantly be called (draw() equivalent)
  //*
  update() {
    //Selected player will move left if the left arrow key is pressed
    if (this.cursors.left.isDown == true) {
      this.player1.setVelocityX(-160);
      //Selected player will move right if the left arrow key is pressed
    } else if (this.cursors.right.isDown == true) {
      this.player1.setVelocityX(160);
    } else {
      //If no arrows are pressed, the player will not move left or right
      this.player1.setVelocityX(0);
    } //Selected player will move upwards if the left arrow key is pressed and if the player is NOT already in the air
    if (this.cursors.up.isDown == true && this.player1.body.onFloor()) {
      this.player1.setVelocityY(-330);
      window.showit = true;
    }
    //Black Platform Movements
    //Black Platform 0
    if (this.movingPlatformsBlack[0].x >= 500) {
      this.movingPlatformsBlack[0].setVelocityX(-50);
    } else if (this.movingPlatformsBlack[0].x <= 300) {
      this.movingPlatformsBlack[0].setVelocityX(50);
    }
    //Black Platform 1
    if (this.movingPlatformsBlack[1].x >= 630) {
      this.movingPlatformsBlack[1].setVelocityX(-40);
    } else if (this.movingPlatformsBlack[1].x <= 430) {
      this.movingPlatformsBlack[1].setVelocityX(40);
    }
  }
}
