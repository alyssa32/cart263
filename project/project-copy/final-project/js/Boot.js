class Boot extends Phaser.Scene {
  //Acts as the `setup` of the class
  constructor() {
    super({
      // Key name to reffer to this class
      key: `boot`,
    });
  }
  //*
  //Preloads all my images
  //*
  preload() {
    this.load.image("whiteBackground", "assets/images/wBackground.png");
    this.load.image("blackBackground", "assets/images/bBackground.png");
    this.load.image("ground", "assets/images/smallPlatform.png");
    this.load.image("whiteGround", "assets/images/ground2.png");
    this.load.image("droplet", "assets/images/droplet.png");
    this.load.image("player1", "assets/images/player1.png");
    this.load.image("player2", "assets/images/player2.png");
  }
  //*
  //Adds the text and switches states when loaded
  //*
  create() {
    let style = {
      fontSize: 24,
      color: `#ffffff`,
    };
    let loading = {
      string: `Loading...`,
      x: 600,
      y: 370,
    };
    this.add.text(loading.x, loading.y, loading.string, style);
    //When the Boot scene starts up, it refers the player to the `intro` scene
    this.scene.start(`play`);
  }

  update() {}
}