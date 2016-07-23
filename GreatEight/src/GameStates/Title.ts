/// <reference path="../common/state/State.ts" />
/// <reference path="../Renderer.ts" />
/// <reference path="../soundmanager.ts" />

class Title extends State<Game> {
    private static instance = new Title();

    private image = new Image();

    private startRectangle: Rectangle = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 0 });
    constructor() {
        super();

        this.image.src = "images/gi01a2015031817003lveg.png";

    }

    // this is a singleton
    public static Instance() {
        return this.instance;
    }
    public getName() {
        return "Title";
    }

    public enter(game: Game) {

    }

    // @Override
    public update(game: Game) {
        SoundManager.makeSound("title");
    }

    // @Override
    public draw(game: Game) {
        let canvasSize = Renderer.getCanvasSize();
        let scale = canvasSize.width / this.image.width;

        Renderer.drawImage(this.image, 0, 0, this.image.width * scale, this.image.height * scale);

        let textMetrics = Renderer.measureText("Great Eight", "120px 'ＭＳ Ｐゴシック'");
        let x = Renderer.getCanvasSize().width / 2 - textMetrics.width / 2;
        let y = Renderer.getCanvasSize().height * 0.2;
        Renderer.drawText("Great Eight", "120px 'Consolas'", "white", x + 2, y + 2);
        Renderer.drawText("Great Eight", "120px 'Consolas'", "red", x, y);

        
        textMetrics = Renderer.measureText("Start", "120px 'ＭＳ Ｐゴシック'");
        x = Renderer.getCanvasSize().width / 2 - textMetrics.width / 2;
        y = Renderer.getCanvasSize().height * 0.6;

        //Renderer.fillRect(
        Renderer.drawText("Start", "100px 'ＭＳ Ｐゴシック'", "white", x + 2, y + 2);
        Renderer.drawText("Start", "100px 'ＭＳ Ｐゴシック'", "red", x, y);
    }

    // @Override
    public exit(game: Game) {
    }

    // @Override
    public onMessage(game: Game, t: Telegram) {
        switch (t.eventType) {
            case "mousedown":

                break;
            default:
                break;
        }
        return false;
    }
}
