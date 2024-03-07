class Boot extends Phaser.Scene {
  //Acts as the `setup` of the class
  constructor() {
    super({
      // Key name to reffer to this class
      key: `boot`,
    });
  }
  create() {
    let style = {
      fontSize: 14,
      color: `#ffffff`,
    };
    let loadingString = `Loading...`;
    this.add.text(330, 200, loadingString, style);
  }

  update() {}
}
