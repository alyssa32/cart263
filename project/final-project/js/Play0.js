class Play0 extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `play0`,
    });
  }
  cursors;
  floor;
  treeTop;
  button;
  hiddenBlock;
  players = [];
  currentPlayer;
  changePlayer;
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Adds the forest background image
    this.add.image(680, 350, "forestBg").setScale(0.43);
    //Colours the background black
    this.cameras.main.setBackgroundColor("#ffffff");
    //Displays the watering can image and text in the top right corner
    this.can = this.add
      .image(1300, 0, "wateringCan1")
      .setOrigin(0)
      .setScale(0.15);
    this.add.text(1325, 80, "0/2", {
      fontSize: "22px",
      fill: "#dedede",
    });
    //Calls functions
    this.player();
    this.ground();
    this.tree();
    this.onClick();
    this.arrowDisplay();
    //Calls to define cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  //*
  //Creates the Players and Asigns them Physics Properties
  //*
  player() {
    // Creating Player 1
    this.players[0] = this.physics.add
      .sprite(225, 660, "player1")
      .setScale(0.05)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.players[0].depth = 100;
    //Sets Player 1 to be the first player to be played
    this.currentPlayer = this.players[0];
    // Creating Player 2
    this.players[1] = this.physics.add
      .sprite(155, 670, "player2")
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
  ground() {
    //Adds physics properties to the white button
    this.button = this.physics.add.image(1000, 725, "button").setScale(0.25);
    this.button.body.immovable = false;
    this.button.body.moves = false;
    this.physics.add.overlap(
      this.players,
      this.button,
      this.buttonPressed,
      null,
      this
    );
    //Adds physics properties to the ground
    this.floor = this.physics.add.staticGroup();
    this.floor.create(700, 860, "ground").setScale(15).refreshBody();
    //Draws a black rectangle over the ground
    var rect = this.add.rectangle(0, 753, 2850, 100, 0x000000);
    //Adds collisions between the players and other objects
    this.physics.add.collider(this.players, this.floor);
    this.physics.add.collider(this.players[1], this.button);
  }
  //*
  //Draws the Tree and adds physics
  //*
  tree() {
    //Adds physics properties to the tree top
    this.treeTop = this.physics.add.image(779, 558, "treeTop").setScale(0.49);
    this.treeTop.setImmovable(true);
    this.treeTop.body.allowGravity = false;
    this.physics.add.collider(this.players, this.treeTop);
  }
  //*
  //If the button is pressed, it grows the tree
  //*
  buttonPressed(players, button) {
    //Lowers the button
    button.disableBody(true, true);
    //Grows the tree
    this.treeTop.setPosition(779, 536).depth = 100;
  }
  //*
  //Draws the Tree and adds physics
  //*
  arrowDisplay() {
    //Draws the arrow image
    this.arrow = this.physics.add.image(1300, 660, "arrow").setScale(0.1);
    this.arrow.setImmovable(true);
    this.arrow.body.allowGravity = false;
    //If the players touch the arrow sign, it will change scenes
    this.physics.add.overlap(
      this.players[0],
      this.arrow,
      this.switchScene,
      null,
      this
    );
  }
  //*
  //Will Collect the Droplet when Collided with a Player
  //*
  switchScene(players, arrow) {
    this.scene.start(`play1`);
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
    //If player 0 passed an x value, the text will display
    if (this.players[0].x >= 620) {
      //Adds the text messaging the player to click the screen
      this.changePlayer = this.add.text(
        715,
        510,
        "Click \nto Change\nCharacter",
        {
          fontSize: "26px",
          fill: "#ffffff",
          align: "center",
        }
      );
    }
  }
}
