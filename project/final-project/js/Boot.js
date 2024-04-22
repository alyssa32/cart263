class Boot extends Phaser.Scene {
  //Acts as the `setup` of the class
  constructor() {
    super({
      // Key name to reffer to this class
      key: `boot`,
    });
  }
  //*
  //Preloads all images and sounds
  //*
  preload() {
    //Images
    this.load.image("city", "assets/images/background.png");
    this.load.image("ground", "assets/images/smallPlatform.png");
    this.load.image("groundWhite", "assets/images/smallPlatformWhite.png");
    this.load.image("droplet", "assets/images/droplet.png");
    this.load.image("player1", "assets/images/player1.png");
    this.load.image("player2", "assets/images/player2.png");
    this.load.image("wateringCan1", "assets/images/wateringCan1.png");
    this.load.image("wateringCan2", "assets/images/wateringCan2.png");
    this.load.image("wateringCan3", "assets/images/wateringCan3.png");
    this.load.image("wateringCan4", "assets/images/wateringCan4.png");
    this.load.image("forestBg", "assets/images/forestBG.png");
    this.load.image("city0", "assets/images/background0.png");
    this.load.image("treeTop", "assets/images/treeTop.png");
    this.load.image("playersGrown", "assets/images/playersGrown.png");
    this.load.image("button", "assets/images/littleButton.png");
    this.load.image("arrow", "assets/images/arrow.png");
    this.load.image("frame", "assets/images/frame.png");
    //Audio
    this.load.audioSprite("music", "assets/audio/squirelling.mp3");
    this.load.audioSprite("pop0", "assets/audio/pop0.mp3");
    this.load.audioSprite("pop1", "assets/audio/pop1.mp3");
    this.load.audioSprite("waterDrip", "assets/audio/waterDrip.mp3");
    this.load.audioSprite("waterSplash", "assets/audio/waterSplash.mp3");
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
    this.scene.start(`play2`);
  }

  update() {}
}
