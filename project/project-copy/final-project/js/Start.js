class Start extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `start`,
    });
  }
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    // Displays the intro text
    this.add.text(100, 100, "The nature in the year 3024 is very limitied.", {
      fontSize: "22px",
      fill: "#dedede",
    });
  }
  //*
  //Will constantly be called (draw() equivalent)
  //*
  update() {}
}
