class Play2 extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `play2`,
    });
  }
  cursors;
  floor;
  movingPlatformsBlack = [];
  movingPlatformsWhite = [];
  players = [];
  currentPlayer;
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Adds the city background image
    this.city = this.add.image(0, -50, "city").setOrigin(0).setScale(2.6);
    //Colours the background black
    this.cameras.main.setBackgroundColor("#ffffff");
    this.can = this.add
      .image(1300, 0, "wateringCan2")
      .setOrigin(0)
      .setScale(0.15);
    this.add.text(1325, 80, "1/3", {
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
      .sprite(300, 120, "player1")
      .setScale(0.05)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.players[0].depth = 100;
    //Sets Player 1 to be the first player to be played
    this.currentPlayer = this.players[0];
    // Creating Player 2
    this.players[1] = this.physics.add
      .sprite(300, 60, "player2")
      .setScale(0.035)
      .setBounce(0.2)
      .setCollideWorldBounds(true);
    this.players[1].depth = 100;
    //Makes the players not pushable
    //this.players[0].setPushable(false);
    //this.players[1].setPushable(false);
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
    //Draws a black rectangle over the ground
    var rect = this.add.rectangle(0, 753, 2850, 100, 0x000000);
    //Creates Black Moving Platform 0 and adds physics
    this.movingPlatformsBlack[0] = this.physics.add.image(500, 400, "ground");
    this.movingPlatformsBlack[0].setImmovable(true);
    this.movingPlatformsBlack[0].body.allowGravity = false;
    this.movingPlatformsBlack[0].setVelocityX(50);
    //Creates Black Moving Platform 1 and adds physics
    this.movingPlatformsBlack[1] = this.physics.add.image(500, 611, "ground");
    this.movingPlatformsBlack[1].setImmovable(true);
    this.movingPlatformsBlack[1].body.allowGravity = false;
    this.movingPlatformsBlack[1].setVelocityX(50);
    //Creates White Moving Platform 0 and adds physics
    this.movingPlatformsWhite[0] = this.physics.add.image(
      800,
      505,
      "groundWhite"
    );
    this.movingPlatformsWhite[0].setImmovable(true);
    this.movingPlatformsWhite[0].body.allowGravity = false;
    this.movingPlatformsWhite[0].setVelocityX(50);
    //Creates White Moving Platform 1 and adds physics
    this.movingPlatformsWhite[1] = this.physics.add.image(
      300,
      300,
      "groundWhite"
    );
    this.movingPlatformsWhite[1].setImmovable(true);
    this.movingPlatformsWhite[1].body.allowGravity = false;
    this.movingPlatformsWhite[1].setVelocityY(50);
    //Adds collisions between the players and the platforms
    this.physics.add.collider(this.players, this.floor);
    this.physics.add.collider(this.players, this.movingPlatformsBlack);
    this.physics.add.collider(this.players, this.movingPlatformsWhite);
  }
  //*
  //Has Everything to Do With the Water Droplet
  //*
  water() {
    //Displays the droplet image
    this.droplet = this.add
      .image(340, 190, "droplet")
      .setOrigin(0)
      .setScale(0.2);
    //Adds a collider between the droplet and player 0
    this.physics.add.collider(this.droplet, this.players[0]);
    this.physics.add.overlap(
      this.players[0],
      this.droplet,
      this.collectDroplet,
      null,
      this
    );
  }
  //*
  //Will Collect the Droplet when Collided with a Player
  //*
  collectDroplet(players, droplet) {
    console.log("test");
    droplet.disableBody(true, true);
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
    //Black Platform Movements
    //Black Platform 0
    if (this.movingPlatformsBlack[0].x >= 650) {
      this.movingPlatformsBlack[0].setVelocityX(-50);
    } else if (this.movingPlatformsBlack[0].x <= 550) {
      this.movingPlatformsBlack[0].setVelocityX(50);
    }
    //Black Platform 1
    if (this.movingPlatformsBlack[1].x >= 630) {
      this.movingPlatformsBlack[1].setVelocityX(-40);
    } else if (this.movingPlatformsBlack[1].x <= 500) {
      this.movingPlatformsBlack[1].setVelocityX(40);
    }
    //White Platform Movements
    //White Platform 0
    if (this.movingPlatformsWhite[0].x >= 900) {
      this.movingPlatformsWhite[0].setVelocityX(-50);
    } else if (this.movingPlatformsWhite[0].x <= 800) {
      this.movingPlatformsWhite[0].setVelocityX(50);
    }
    //White Platform 1
    if (this.movingPlatformsWhite[1].y >= 380) {
      this.movingPlatformsWhite[1].setVelocityY(-40);
    } else if (this.movingPlatformsWhite[1].y <= 290) {
      this.movingPlatformsWhite[1].setVelocityY(40);
    }
  }
}
