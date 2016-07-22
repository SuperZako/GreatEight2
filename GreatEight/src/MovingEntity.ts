/// <reference path="./BaseGameEntity.ts" />

abstract class MovingEntity extends BaseGameEntity {

    protected oldPosition = new Vector3();
    protected acceleration = new Vector3();

    public setAcceleration(acceleration: Vector3) {
        this.acceleration = acceleration;
    }

    public update(dt: number) {
        let difference = Vector3.subtract(this.position, this.oldPosition);
        let velocity = Vector3.divide(difference, dt);

        let position = new Vector3();
        position.set(this.position);
        this.position.add(velocity);
        this.position.add(Vector3.multiply(dt * dt, this.acceleration));

        this.oldPosition.set(position);
    }

}