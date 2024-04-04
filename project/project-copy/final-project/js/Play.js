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
  movingPlatforms;
  player1;
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
    this.movingPlatform = this.physics.add.image(400, 400, "ground");
    this.movingPlatform.setImmovable(true);
    this.movingPlatform.body.allowGravity = false;
    this.movingPlatform.setVelocityX(50);

    this.platforms.create(600, 600, "ground");

    //Adds collisions between the players and the platforms
    this.physics.add.collider(this.player1, this.platforms);
    this.physics.add.collider(this.player1, this.movingPlatform);
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
    //Platform movement
    if (this.movingPlatform.x >= 500) {
      this.movingPlatform.setVelocityX(-50);
    } else if (this.movingPlatform.x <= 300) {
      this.movingPlatform.setVelocityX(50);
    }
  }
}
