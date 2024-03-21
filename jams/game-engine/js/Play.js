class Play extends Phaser.Scene {
  //Acts as the `setup` of the class
  constructor() {
    super({
      // Key name to reffer to this class
      key: `play`,
    });
  }
  //Will be called one time (setup() equivalent)
  create() {
    let style = {
      fontSize: 34,
      color: `#bdfffe`,
    };
    this.add.image(0, -140, "whiteBackground").setOrigin(0);
    let gameDescription = `Add the game description here`;
    this.add.text(100, 100, gameDescription, style);
  }
  //Will constantly be called (draw() equivalent)
  update() {}
}
