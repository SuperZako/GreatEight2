
namespace FieldPlayerImages {
    var images: IStringDictionary<HTMLImageElement> = {};

    export function initialize() {
        for (let i = 0; i < 10; ++i) {
            let image = new Image();
            image.src = "../images/characters/0_00" + i.toString() + ".png";

            images["0_00" + i.toString()] = image;
        }

        for (let i = 10; i <= 47; ++i) {
            let image = new Image();
            image.src = "../images/characters/0_0" + i.toString() + ".png";

            images["0_0" + i.toString()] = image;
        }
    }

    export function get(key: string) {
        return images[key];
    }
}

FieldPlayerImages.initialize();

class FieldPlayerAnimator {
    private animations: IStringDictionary<HTMLImageElement[]> = {};
    private currentFrame = 0;

    constructor() {
        let animation: HTMLImageElement[] = []
        animation.push(FieldPlayerImages.get("0_025")); // addFrame:0,25,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_025")); // addFrame:0,25,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_026")); // addFrame:0,26,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_026")); // addFrame:0,26,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_027")); // addFrame:0,27,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_027")); // addFrame:0,27,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_028")); // addFrame:0,28,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_028")); // addFrame:0,28,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_029")); // addFrame:0,29,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_029")); // addFrame:0,29,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_030")); // addFrame:0,30,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_030")); // addFrame:0,30,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_031")); // addFrame:0,31,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_031")); // addFrame:0,31,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_032")); // addFrame:0,32,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_032")); // addFrame:0,32,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_033")); // addFrame:0,33,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_033")); // addFrame:0,33,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_034")); // addFrame:0,34,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_034")); // addFrame:0,34,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_035")); // addFrame:0,35,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_035")); // addFrame:0,35,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_024")); // addFrame:0,24,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_024")); // addFrame:0,24,0,0,2,NONE
        this.animations["0"] = animation; //    addAnim:0,1

        animation = [];
        animation.push(FieldPlayerImages.get("0_010"));//    addFrame:0,10,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_011"));//    addFrame:0,11,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_012"));//    addFrame:0,12,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_013"));//    addFrame:0,13,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_014"));//    addFrame:0,14,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_015"));//    addFrame:0,15,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_016"));//    addFrame:0,16,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_017"));//    addFrame:0,17,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_018"));//    addFrame:0,18,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_019"));//    addFrame:0,19,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_020"));//    addFrame:0,20,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_021"));//    addFrame:0,21,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_022"));//    addFrame:0,22,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_023"));//    addFrame:0,23,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_000"));//    addFrame:0,0,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_001"));//    addFrame:0,1,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_002"));//    addFrame:0,2,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_003"));//    addFrame:0,3,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_004"));//    addFrame:0,4,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_005"));//    addFrame:0,5,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_006"));//    addFrame:0,6,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_007"));//    addFrame:0,7,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_008"));//    addFrame:0,8,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_009"));//    addFrame:0,9,0,0,2,NONE
        this.animations["1"] = animation; // addAnim:2,1

        animation = [];
        animation.push(FieldPlayerImages.get("0_044"));//    addFrame:0,44,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_044"));//    addFrame:0,44,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_045"));//    addFrame:0,45,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_045"));//    addFrame:0,45,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_046"));//    addFrame:0,46,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_046"));//    addFrame:0,46,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_047"));//    addFrame:0,47,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_047"));//    addFrame:0,47,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_036"));//    addFrame:0,36,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_036"));//    addFrame:0,36,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_037"));//    addFrame:0,37,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_037"));//    addFrame:0,37,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_038"));//    addFrame:0,38,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_038"));//    addFrame:0,38,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_039"));//    addFrame:0,39,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_039"));//    addFrame:0,39,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_040"));//    addFrame:0,40,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_040"));//    addFrame:0,40,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_041"));//    addFrame:0,41,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_041"));//    addFrame:0,41,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_042"));//    addFrame:0,42,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_042"));//    addFrame:0,42,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_043"));//    addFrame:0,43,0,0,2,NONE
        animation.push(FieldPlayerImages.get("0_043"));//    addFrame:0,43,0,0,2,NONE
        this.animations["2"] = animation;//    addAnim:4,1

        animation = [];
        animation.push(FieldPlayerImages.get("0_022")); //    addFrame:0,22,0,0,2,H
        animation.push(FieldPlayerImages.get("0_023")); //    addFrame:0,23,0,0,2,H
        animation.push(FieldPlayerImages.get("0_000")); //    addFrame:0,0,0,0,2,H
        animation.push(FieldPlayerImages.get("0_001")); //    addFrame:0,1,0,0,2,H
        animation.push(FieldPlayerImages.get("0_002")); //    addFrame:0,2,0,0,2,H
        animation.push(FieldPlayerImages.get("0_003")); //    addFrame:0,3,0,0,2,H
        animation.push(FieldPlayerImages.get("0_004")); //    addFrame:0,4,0,0,2,H
        animation.push(FieldPlayerImages.get("0_005")); //    addFrame:0,5,0,0,2,H
        animation.push(FieldPlayerImages.get("0_006")); //    addFrame:0,6,0,0,2,H
        animation.push(FieldPlayerImages.get("0_007")); //    addFrame:0,7,0,0,2,H
        animation.push(FieldPlayerImages.get("0_008")); //    addFrame:0,8,0,0,2,H
        animation.push(FieldPlayerImages.get("0_009")); //    addFrame:0,9,0,0,2,H
        animation.push(FieldPlayerImages.get("0_010")); //    addFrame:0,10,0,0,2,H
        animation.push(FieldPlayerImages.get("0_011")); //    addFrame:0,11,0,0,2,H
        animation.push(FieldPlayerImages.get("0_012")); //    addFrame:0,12,0,0,2,H
        animation.push(FieldPlayerImages.get("0_013")); //    addFrame:0,13,0,0,2,H
        animation.push(FieldPlayerImages.get("0_014")); //    addFrame:0,14,0,0,2,H
        animation.push(FieldPlayerImages.get("0_015")); //    addFrame:0,15,0,0,2,H
        animation.push(FieldPlayerImages.get("0_016")); //    addFrame:0,16,0,0,2,H
        animation.push(FieldPlayerImages.get("0_017")); //    addFrame:0,17,0,0,2,H
        animation.push(FieldPlayerImages.get("0_018")); //    addFrame:0,18,0,0,2,H
        animation.push(FieldPlayerImages.get("0_019")); //    addFrame:0,19,0,0,2,H
        animation.push(FieldPlayerImages.get("0_020")); //    addFrame:0,20,0,0,2,H
        animation.push(FieldPlayerImages.get("0_021")); //    addFrame:0,21,0,0,2,H
        this.animations["3"] = animation;//    addAnim:6,1

        //    addFrame:10,3,0,0,6,NONE
        //    addFrame:10,4,0,0,10,NONE
        //    addAnim:10,-1
        //addFrame: 10, 0, 0, -3, 4, NONE
        //addFrame: 10, 1, 0, -1, 2, NONE
        //addFrame: 10, 2, 0, 0, 2, NONE
        //addFrame: 0, 15, 0, 0, 2, NONE
        //addFrame: 0, 16, 0, 0, 2, NONE
        //addFrame: 0, 17, 0, 0, 4, NONE
        //addFrame: 0, 18, 0, 0, 4, NONE
        //addAnim: 11, -1
        //addFrame: 40, 0, 0, 0, 8, NONE
        //addFrame: 40, 1, 0, 0, 8, NONE
        //addAnim: 20, 1
        //addFrame: 40, 2, 0, 0, 8, NONE
        //addFrame: 40, 3, 0, 0, 8, NONE
        //addAnim: 22, 1
        //addFrame: 40, 4, 0, 0, 8, NONE
        //addFrame: 40, 5, 0, 0, 8, NONE
        //addAnim: 24, 1
        //addFrame: 40, 2, 0, 0, 8, H
        //addFrame: 40, 3, 0, 0, 8, H
        //addAnim: 26, 1
        //addFrame: 20, 0, 0, 0, 4, NONE
        //addFrame: 30, 0, 0, 0, 4, NONE
        //addFrame: 30, 1, 0, 0, 4, NONE
        //addAnim: 30, 2
        //addFrame: 20, 2, 0, 0, 4, NONE
        //addFrame: 30, 2, 0, 0, 4, NONE
        //addFrame: 30, 3, 0, 0, 4, NONE
        //addAnim: 32, 2
        //addFrame: 20, 4, 0, 0, 4, NONE
        //addFrame: 30, 4, 0, 0, 4, NONE
        //addFrame: 30, 5, 0, 0, 4, NONE
        //addAnim: 34, 2
        //addFrame: 20, 2, 0, 0, 4, H
        //addFrame: 30, 2, 0, 0, 4, H
        //addFrame: 30, 3, 0, 0, 4, H
        //addAnim: 36, 2
        //addFrame: 20, 0, 0, 0, 12, NONE
        //addFrame: 20, 1, 0, 0, 12, NONE
        //addAnim: 40, -1
        //addFrame: 20, 2, 0, 0, 12, NONE
        //addFrame: 20, 3, 0, 0, 12, NONE
        //addAnim: 42, -1
        //addFrame: 20, 4, 0, 0, 12, NONE
        //addFrame: 20, 5, 0, 0, 12, NONE
        //addAnim: 44, -1
        //addFrame: 20, 2, 0, 0, 12, H
        //addFrame: 20, 3, 0, 0, 12, H
        //addAnim: 46, -1
        //addFrame: 50, 0, 0, 0, 1, NONE
        //addAnim: 50, -1
        //addFrame: 50, 2, 0, 0, 1, NONE
        //addAnim: 52, -1
        //addFrame: 50, 1, 0, 0, 30, NONE
        //addAnim: 54, -1
        //addFrame: 50, 3, 0, 0, 30, NONE
        //addAnim: 56, -1
        //addFrame: 0, 25, 0, 0, 8, NONE
        //addAnim: 60, -1
        //addFrame: 10, 3, 0, 0, 8, NONE
        //addAnim: 62, -1
        //addFrame: 0, 43, 0, 0, 8, NONE
        //addAnim: 64, -1
        //addFrame: 10, 3, 0, 0, 8, H
        //addAnim: 66, -1
        //addFrame: 0, 30, 0, 0, 8, NONE
        //addAnim: 70, -1
        //addFrame: 10, 2, 0, 0, 8, NONE
        //addAnim: 72, -1
        //addFrame: 0, 36, 0, 0, 8, NONE
        //addAnim: 74, -1
        //addFrame: 10, 2, 0, 0, 8, H
        //addAnim: 76, -1
        //addFrame: 60, 0, 0, 0, 8, NONE
        //addFrame: 60, 1, 0, 0, 4, NONE
        //addFrame: 60, 2, 0, 0, 4, NONE
        //addFrame: 60, 3, 0, 0, 4, NONE
        //addFrame: 60, 4, 0, 0, 4, NONE
        //addAnim: 80, -1
        //addFrame: 60, 0, 0, 0, 8, H
        //addFrame: 60, 1, 0, 0, 4, H
        //addFrame: 60, 2, 0, 0, 4, H
        //addFrame: 60, 3, 0, 0, 4, H
        //addFrame: 60, 4, 0, 0, 4, H
        //addAnim: 82, -1
        //addFrame: 20, 0, 0, -6, 10, NONE
        //addAnim: 90, -1
        //addFrame: 60, 5, 0, 0, 10, NONE
        //addAnim: 92, -1
        //addFrame: 20, 4, 0, -7, 10, NONE
        //addAnim: 94, -1
        //addFrame: 60, 5, 0, 0, 10, H
        //addAnim: 96, -1
        //addFrame: 60, 7, 0, 0, 10, NONE
        //addAnim: 100, -1
        //addFrame: 60, 6, 0, 0, 10, NONE
        //addAnim: 102, -1
        //addFrame: 60, 8, 0, 0, 10, NONE
        //addAnim: 104, -1
        //addFrame: 70, 1, 0, 0, 16, NONE
        //addFrame: 70, 0, 0, 0, 16, NONE
        //addAnim: 200, 1
        //addFrame: 70, 1, 0, 0, 12, NONE
        //addFrame: 70, 0, 0, 0, 12, NONE
        //addFrame: 70, 1, 0, 0, 12, NONE
        //addFrame: 70, 2, 0, 0, 8, NONE
        //addFrame: 70, 3, 0, 0, 8, NONE
        //addFrame: 70, 4, 0, 0, 8, NONE
        //addAnim: 210, -1
        //addFrame: 70, 5, 0, 0, 10, NONE
        //addFrame: 70, 6, 0, 0, 10, NONE
        //addFrame: 70, 7, 0, 0, 10, NONE
        //addFrame: 70, 6, 0, 0, 10, NONE
        //addFrame: 70, 5, 0, 0, 10, NONE
        //addFrame: 70, 6, 0, 0, 10, NONE
        //addFrame: 70, 7, 0, 0, 10, NONE
        //addFrame: 70, 1, 0, 0, 10, NONE
        //addFrame: 70, 0, 0, 0, 10, NONE
        //addAnim: 220, -1
        //addFrame: 70, 2, 0, 0, 10, NONE
        //addFrame: 70, 3, 0, 0, 10, NONE
        //addFrame: 70, 4, 0, 0, 10, NONE
        //addFrame: 70, 1, 0, 0, 10, NONE
        //addFrame: 70, 2, 0, 0, 10, H
        //addFrame: 70, 3, 0, 0, 10, H
        //addFrame: 70, 4, 0, 0, 10, H
        //addFrame: 70, 1, 0, 0, 10, NONE
        //addAnim: 230, 1
        //addFrame: 80, 4, 0, 0, 10, NONE
        //addAnim: 300, -1
        //addFrame: 80, 5, 0, 0, 10, NONE
        //addAnim: 310, -1
        //addFrame: 80, 5, 0, 0, 10, H
        //addAnim: 312, -1
        //addFrame: 80, 0, 0, 0, 24, NONE
        //addFrame: 80, 1, 0, 0, 24, NONE
        //addAnim: 320, 1
        //addFrame: 80, 2, 0, 0, 2, NONE
        //addFrame: 80, 3, 0, 0, 2, NONE
        //addAnim: 330, 1
        //addFrame: 80, 2, 0, 0, 2, H
        //addFrame: 80, 3, 0, 0, 2, H
        //addAnim: 332, 1
        //addFrame: 80, 6, 0, 0, 8, NONE
        //addFrame: 80, 7, 0, 0, 8, NONE
        //addFrame: 80, 8, 0, 0, 8, NONE
        //addFrame: 80, 7, 0, 0, 8, NONE
        //addAnim: 340, 1
        //addFrame: 80, 6, 0, 0, 8, H
        //addFrame: 80, 7, 0, 0, 8, H
        //addFrame: 80, 8, 0, 0, 8, H
        //addFrame: 80, 7, 0, 0, 8, H
        //addAnim: 342, 1
    }

    public update() {
    }

    public draw(x: number, y: number) {
        let scale = 2;
        let image = this.animations["3"][this.currentFrame];
        //context.drawImage(image, x, y, image.width * scale, image.height * scale);
        Renderer.drawImage(image, x, y, image.width * scale, image.height * scale);

        this.currentFrame++;
        this.currentFrame = this.currentFrame % this.animations["3"].length;
    }
}