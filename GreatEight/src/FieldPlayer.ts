/// <reference path="./PlayerBase.ts" />


class FieldPlayer extends PlayerBase {

    private fieldPlayerAnimator = new FieldPlayerAnimator();

    constructor() {
        super();
    }

    public update(dt: number) {
        super.update(dt);

        this.fieldPlayerAnimator.update();
    }

    public draw() {
        let v = Renderer.tranform(this.position);

        this.fieldPlayerAnimator.draw(v.x, v.y);
    }
}