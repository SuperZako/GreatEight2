

abstract class BaseGameEntity {

    protected position = new Vector3();

    public abstract update(dt: number): void;


    public abstract draw(context: CanvasRenderingContext2D): void;

}