const Canvas = require(`canvas`);

module.exports = class Biden {
  /**
   * Bobross
   * @param {image} image1
   */
  async getImage(image1) {
    if (!image1) throw new Error(`You must provide an image as an argument`);
    const canvas = Canvas.createCanvas(555, 370);
    const ctx = canvas.getContext(`2d`);
    image1 = await Canvas.loadImage(image1);
    const background = await Canvas.loadImage(
      `${__dirname}/../../assets/biden.png`
    );
    //ctx.drawImage(image1, 0, 0, 610, 610);
    ctx.drawImage(image1, 150, 50, 250, 250);
    ctx.drawImage(background, 0, 0, 555, 370);
    return canvas.toBuffer();
  }
};
