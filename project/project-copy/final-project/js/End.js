class End extends Phaser.Scene {
  //*
  //Acts as the `setup` of the class
  //*
  constructor() {
    super({
      // Key name to reffer to this class
      key: `end`,
    });
  }
  //*
  //Will be called one time (setup() equivalent)
  //*
  create() {
    //Dislays the image of both characters
    this.add.image(710, 330, "playersGrown").setScale(0.4);
    //Colours the background grey
    this.cameras.main.setBackgroundColor("#ebebeb");
    //Displays the "Restart" button
    const button = this.add
      .text(730, 600, "Restart", {
        fontFamily: "Arial",
        fontSize: "32px",
        color: "#ffffff",
        align: "center",
        fixedWidth: 260,
        backgroundColor: "#5fb359",
      })
      .setPadding(32)
      .setOrigin(0.5);
    button.setInteractive({ useHandCursor: true });
    //Changes the button color to light green if hovered over by the cursor
    button.on("pointerover", () => {
      button.setBackgroundColor("#b2eb50");
      button.setColor("#ffffff");
    });
    //Changes the button color back to ddark green
    button.on("pointerout", () => {
      button.setBackgroundColor("#5fb359");
      button.setColor("#000000");
    });
    //Brings the player back to the first level if the button is pressed
    button.on("pointerdown", () => {
      this.scene.start(`play1`);
    });
  }
  //*
  //Will constantly be called (draw() equivalent)
  //*
  update() {}
}
