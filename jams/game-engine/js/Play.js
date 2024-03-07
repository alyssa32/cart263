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
    let gameDescription = `Add the game description here`;
    this.add.text(100, 100, gameDescription, style);
  }
  //Will constantly be called (draw() equivalent)
  update() {}
}
