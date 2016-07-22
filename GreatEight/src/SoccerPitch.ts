


class SoccerPitch {

    private pitch = new Image();

    constructor() {
        this.pitch.src = "../images/bg/circle/pitch.jpg";
    }

    public update() {

    }


    public draw() {
        let offsetX = Renderer.offsetX;
        let offsetY = Renderer.offsetY;
        let scale = 1;
        Renderer.drawImage(this.pitch, -offsetX, -offsetY, this.pitch.width * scale, this.pitch.height * scale);

    }
}