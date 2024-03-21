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
    this.add.image(0, -140, "whiteBackground").setOrigin(0);
    //Adds instructions to the top left corner
    this.add.text(10, 10, "Click to change character", {
      fontSize: "22px",
      //Grey colour
      fill: "#c7c7c7",
    });
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
    //Player 2
    this.player2 = this.physics.add
      .sprite(890, 622, "player2")
      .setScale(0.035)
      .setBounce(0.2)
      //Contricts the players within the canvas border
      .setCollideWorldBounds(true);
    //Makes Player 2 not pushable
    this.player2.setPushable(false);
    //Sets Player 1 to be the first player to be played
    this.currentPlayer = this.player1;
    this.physics.add.collider(this.player2, this.player1);
  }
  blocks() {
    const platforms = this.physics.add.group({
      defaultKey: "ground",
    });
    platforms.create(400, 500);
    platforms.create(450, 400);
    platforms.create(500, 300);
    platforms.create(550, 200);
    platforms.create(600, 100);
    //Secures the platforms into place
    for (const platform of platforms.getChildren()) {
      platform.body.immovable = true;
      platform.body.moves = false;
    }
    const block = this.physics.add.staticImage(100, 300, "blackPlatform1");

    this.physics.add.collider(
      this.currentPlayer,
      platforms,
      (currentPlayer, platform) => {
        // platform.body.moves = true;
        platform.body.checkCollision = true;
      }
    );
  }
  //*
  //Will change between players if mouse if clicked
  //*
  onClick() {
    this.input.on("pointerdown", () => {
      if (this.currentPlayer === this.player1) {
        this.currentPlayer = this.player2;
      } else {
        this.currentPlayer = this.player1;
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
    } //Selected player will move upwards if the left arrow key is pressed
    if (this.cursors.up.isDown == true) {
      this.currentPlayer.setVelocityY(-330);
      window.showit = true;
    }
  }
}
