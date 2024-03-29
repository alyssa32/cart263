class Intro extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `intro`,
    });
  }
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Displays the text
    this.add
      .text(580, 500, "Press the ENTER to begin", {
        font: "20px Courier",
        fill: "#ffffff",
      })
      .setShadow(1, 1);
    //Has the enter key switch the scene to `into`
    const enterKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    enterKey.on("down", (key, event) => {
      this.scene.start(`play`);
    });
  }

  //*
  //Will constantly be called (draw() equivalent)
  //*
  update() {}
}
