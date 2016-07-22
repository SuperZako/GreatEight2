

class Vector3 {
    constructor(public x = 0, public y = 0, public z = 0, public w = 1) { }

    public static add(vector1: Vector3, vector2: Vector3) {
        return new Vector3(vector1.x + vector2.x, vector1.y + vector2.y, vector1.z + vector2.z);
    }

    public static subtract(vector1: Vector3, vector2: Vector3) {
        return new Vector3(vector1.x - vector2.x, vector1.y - vector2.y, vector1.z - vector2.z);
    }

    public static multiply(scalar: number, vector: Vector3) {
        return new Vector3(scalar * vector.x, scalar * vector.y, scalar * vector.z);
    }

    public static divide(vector: Vector3, scalar: number) {
        if (scalar === 0) {
            return vector;
        }
        return new Vector3(vector.x / scalar, vector.y / scalar, vector.z / scalar);
    }

    public static dot(vector1: Vector3, vector2: Vector3) {
        return vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
    }

    public static cross(vector1: Vector3, vector2: Vector3) {
        let x1 = vector1.x;
        let y1 = vector1.y;
        let z1 = vector1.z;
        let x2 = vector2.x;
        let y2 = vector2.y;
        let z2 = vector2.z;
        return new Vector3(y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2);
    }

    public static normalize(vector: Vector3) {
        let length = vector.length();

        return new Vector3(vector.x / length, vector.y / length, vector.z / length);
    }

    public static transform(position: Vector3, matrix: Matrix) {
        return new Vector3(
            (position.x * matrix.m11) + (position.y * matrix.m21) + (position.z * matrix.m31) + (position.w * matrix.m41),
            (position.x * matrix.m12) + (position.y * matrix.m22) + (position.z * matrix.m32) + (position.w * matrix.m42),
            (position.x * matrix.m13) + (position.y * matrix.m23) + (position.z * matrix.m33) + (position.w * matrix.m43),
            (position.x * matrix.m14) + (position.y * matrix.m24) + (position.z * matrix.m34) + (position.w * matrix.m44));
    }


    public set(vector: Vector3) {
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
    }

    public lengthSquared() {
        let x = this.x;
        let y = this.y;
        let z = this.z;
        return x * x + y * y + z * z;
    }

    public length() {
        let lengthSquared = this.lengthSquared();
        return Math.sqrt(lengthSquared);
    }


    public add(vector: Vector3) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
    }


    public divide(scalar: number) {
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
    }

    public project() {
        this.x /= this.w;
        this.y /= this.w;
        this.z /= this.w;
        this.w = 1;
    }

}