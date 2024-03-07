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
      fontSize: 24,
      color: `#ffffff`,
    };
    let loading = {
      string: `Loading...`,
      x: 600,
      y: 370,
    };
    this.add.text(loading.x, loading.y, loading.string, style);
    //When the Boot scene starts up, it refers the player to the `play` scene
    this.scene.start(`play`);
  }

  update() {}
}
