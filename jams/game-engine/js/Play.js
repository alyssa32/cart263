class Play extends Phaser.Scene {
  //Acts as the `setup` of the class
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
  //Will be called one time (setup() equivalent)
  create() {
    //Creates the background
    this.add.image(0, -140, "whiteBackground").setOrigin(0);
    //Defines the ground properties
    const ground = this.physics.add.staticGroup();
    ground.create(400, 668, "ground").setScale(2).refreshBody();
    //Calls functions
    this.players();
    //Calls to define cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }
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
    this.player2.setPushable(false);
    //Sets Player 1 to be the first player to be played
    this.currentPlayer = this.player1;
  }

  //Will constantly be called (draw() equivalent)
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
