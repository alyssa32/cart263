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
  currentPlayer;
  player2;
  player1;
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Creates the background
    this.background = this.add.image(0, -140, "whiteBackground").setOrigin(0);
    //Creates the ground
    this.ground = this.add.image(0, 700, "blackGround").setOrigin(0);
    //Adds instructions to the top left corner
    this.add.text(10, 10, "Click to change character", {
      fontSize: "22px",
      //Grey colour
      fill: "#c7c7c7",
    }).depth = 100;
    //Calls functions
    this.players();
    this.blocks();
    this.onClick();
    //Calls to define cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  //*
  //Everything that pertains to the characters
  //*
  players() {
    // Player 1
    this.player1 = this.physics.add
      .sprite(50, 610, "player1")
      .setScale(0.05)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.player1.depth = 100;
    //Player 2
    this.player2 = this.physics.add
      .sprite(890, 622, "player2")
      .setScale(0.035)
      .setBounce(0.2)
      //Contricts the players within the canvas border
      .setCollideWorldBounds(true);
    this.player2.depth = 100;
    //Makes the players not pushable
    this.player1.setPushable(false);
    this.player2.setPushable(false);
    //Sets Player 1 to be the first player to be played
    this.currentPlayer = this.player1;
    //Have the players collide
    this.physics.add.collider(this.player2, this.player1);
  }
  //*
  //Has Everything to do with Platforms
  //*
  blocks() {
    this.ground.setImmovable = true;
    this.physics.add.collider(this.player1, this.player2, this.ground);
  }
  //*
  //Will perform actions if mouse is clicked
  //*
  onClick() {
    this.input.on("pointerdown", () => {
      if (this.currentPlayer === this.player1) {
        //switches to player 2
        this.currentPlayer = this.player2;
        //Changes to the black background image
        this.background = this.add
          .image(0, -140, "blackBackground")
          .setOrigin(0);
        //Changes the ground colour to white
        this.ground = this.add.image(0, 700, "whiteGround").setOrigin(0);
      } else {
        //switches to player 1
        this.currentPlayer = this.player1;
        //Changes to the white background image
        this.background = this.add
          .image(0, -140, "whiteBackground")
          .setOrigin(0);
        //Changes the ground colour to black
        this.ground = this.add.image(0, 700, "blackGround").setOrigin(0);
      }
    });
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
    } //Selected player will move upwards if the left arrow key is pressed and if the player is NOT already in the air
    if (this.cursors.up.isDown == true && this.currentPlayer.body.onFloor()) {
      this.currentPlayer.setVelocityY(-330);
      window.showit = true;
    }
  }
}
