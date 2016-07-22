
namespace Renderer {
    export var viewPort = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };

    var canvasWidth = 1024;
    var canvasHeight = 768;

    var pitchImageWidth = 3072;
    var pitchImageHeight = 1024;

    var canvas: HTMLCanvasElement;
    var context: CanvasRenderingContext2D;

    export var offsetX = 100;
    export var offsetY = 100;


    function resize() {
        canvasWidth = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;

        offsetX = (pitchImageWidth - canvas.width) / 2;
        offsetY = (pitchImageHeight - canvas.height) / 2;
    }

    export function initialize() {

        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        context = canvas.getContext('2d');

        window.addEventListener('resize', resize, false);
        resize();
    }

    export var distance = 100;//65;
    export var angle = 90;
    export var height = 0;

    export function tranform(vector: Vector3) {
        let matrix1 = Matrix.createFromAxisAngle(new Vector3(1, 0, 0), -MathHelper.toRadians(angle));
        let matrix2 = Matrix.createTranslation(new Vector3(0, distance, height));
        let viewMatrix = Matrix.multiply(matrix1, matrix2);
        let v1 = Vector3.transform(vector, viewMatrix);

        return {
            x: v1.x / v1.y * pitchImageWidth / 2 + pitchImageWidth / 2 - offsetX,
            y: v1.z / v1.y * pitchImageHeight / 2 + pitchImageHeight / 2 - offsetY
        };
    }

    export function drawImage(image: HTMLImageElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number) {
        context.drawImage(image, offsetX, offsetY, width, height);//, canvasOffsetX, canvasOffsetY, canvasImageWidth, canvasImageHeight);
    }

    export function drawText(text: string, font: string) {
        /* フォントスタイルを定義 */
        context.font = font;
        context.fillStyle = "red";
        // get text metrics
        var metrics = context.measureText(text);
        context.fillText(text, canvasWidth / 2, canvasHeight / 2);
    }

    export function draw() {

        let v1 = tranform(new Vector3(53, -34, 0));
        let v2 = tranform(new Vector3(53, 34, 0));
        let v3 = tranform(new Vector3(-53, 34, 0));
        let v4 = tranform(new Vector3(-53, -34, 0));
        // Canvas全体をクリア
        //var w = canvas.width;
        //var h = canvas.height;
        //context.fillRect(0, 0, w, h);



        context.fillStyle = "blue";
        context.beginPath();
        context.moveTo(v1.x, v1.y);
        context.lineTo(v2.x, v2.y);
        context.lineTo(v3.x, v3.y);
        context.lineTo(v4.x, v4.y);
        context.lineTo(v1.x, v1.y);
        context.stroke();
    }
}