class Play extends Phaser.Scene {
  //Acts as the `setup` of the class
  constructor() {
    super({
      // Key name to reffer to this class
      key: `play`,
    });
  }

  player1Properties = {
    w: 100,
    h: 100,
  };
  cursors;
  currentPlayer;
  player2;
  player1;
  //Will be called one time (setup() equivalent)
  create() {
    //Creates the background
    this.add.image(0, -140, "whiteBackground").setOrigin(0);
    //Defines the ground properties
    const ground = this.physics.add.staticGroup();
    ground.create(400, 668, "ground").setScale(2).refreshBody();
    //Calls functions
    this.players();
    this.movement();
  }
  //Will constantly be called (draw() equivalent)
  update() {}
  //Everything that pertains to the characters
  players() {
    // Player 1
    this.player1 = this.physics.add
      .sprite(50, 660, "player1")
      .setScale(0.05)
      .setBounce(0.2)

      .setCollideWorldBounds(true);
    //Player 2
    this.player2 = this.physics.add
      .sprite(890, 672, "player2")
      .setScale(0.035)
      .setBounce(0.2)

      .setCollideWorldBounds(true);
    // this.player1.name = "Black";
    // this.player2.name = "White";
    // this.player2.setPushable(false);
    // this.currentPlayer = this.player1;
  }
  movement() {
    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player1", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
  }
}
