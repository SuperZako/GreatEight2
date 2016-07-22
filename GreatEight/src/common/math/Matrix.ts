

class Matrix {

    public m11 = 1; public m12 = 0; public m13 = 0; public m14 = 0;
    public m21 = 0; public m22 = 1; public m23 = 0; public m24 = 0;
    public m31 = 0; public m32 = 0; public m33 = 1; public m34 = 0;
    public m41 = 0; public m42 = 0; public m43 = 0; public m44 = 1;

    constructor() {
    }

    public static multiply(matrix1: Matrix, matrix2: Matrix) {
        var m11 = (((matrix1.m11 * matrix2.m11) + (matrix1.m12 * matrix2.m21)) + (matrix1.m13 * matrix2.m31)) + (matrix1.m14 * matrix2.m41);
        var m12 = (((matrix1.m11 * matrix2.m12) + (matrix1.m12 * matrix2.m22)) + (matrix1.m13 * matrix2.m32)) + (matrix1.m14 * matrix2.m42);
        var m13 = (((matrix1.m11 * matrix2.m13) + (matrix1.m12 * matrix2.m23)) + (matrix1.m13 * matrix2.m33)) + (matrix1.m14 * matrix2.m43);
        var m14 = (((matrix1.m11 * matrix2.m14) + (matrix1.m12 * matrix2.m24)) + (matrix1.m13 * matrix2.m34)) + (matrix1.m14 * matrix2.m44);

        var m21 = (((matrix1.m21 * matrix2.m11) + (matrix1.m22 * matrix2.m21)) + (matrix1.m23 * matrix2.m31)) + (matrix1.m24 * matrix2.m41);
        var m22 = (((matrix1.m21 * matrix2.m12) + (matrix1.m22 * matrix2.m22)) + (matrix1.m23 * matrix2.m32)) + (matrix1.m24 * matrix2.m42);
        var m23 = (((matrix1.m21 * matrix2.m13) + (matrix1.m22 * matrix2.m23)) + (matrix1.m23 * matrix2.m33)) + (matrix1.m24 * matrix2.m43);
        var m24 = (((matrix1.m21 * matrix2.m14) + (matrix1.m22 * matrix2.m24)) + (matrix1.m23 * matrix2.m34)) + (matrix1.m24 * matrix2.m44);

        var m31 = (((matrix1.m31 * matrix2.m11) + (matrix1.m32 * matrix2.m21)) + (matrix1.m33 * matrix2.m31)) + (matrix1.m34 * matrix2.m41);
        var m32 = (((matrix1.m31 * matrix2.m12) + (matrix1.m32 * matrix2.m22)) + (matrix1.m33 * matrix2.m32)) + (matrix1.m34 * matrix2.m42);
        var m33 = (((matrix1.m31 * matrix2.m13) + (matrix1.m32 * matrix2.m23)) + (matrix1.m33 * matrix2.m33)) + (matrix1.m34 * matrix2.m43);
        var m34 = (((matrix1.m31 * matrix2.m14) + (matrix1.m32 * matrix2.m24)) + (matrix1.m33 * matrix2.m34)) + (matrix1.m34 * matrix2.m44);

        var m41 = (((matrix1.m41 * matrix2.m11) + (matrix1.m42 * matrix2.m21)) + (matrix1.m43 * matrix2.m31)) + (matrix1.m44 * matrix2.m41);
        var m42 = (((matrix1.m41 * matrix2.m12) + (matrix1.m42 * matrix2.m22)) + (matrix1.m43 * matrix2.m32)) + (matrix1.m44 * matrix2.m42);
        var m43 = (((matrix1.m41 * matrix2.m13) + (matrix1.m42 * matrix2.m23)) + (matrix1.m43 * matrix2.m33)) + (matrix1.m44 * matrix2.m43);
        var m44 = (((matrix1.m41 * matrix2.m14) + (matrix1.m42 * matrix2.m24)) + (matrix1.m43 * matrix2.m34)) + (matrix1.m44 * matrix2.m44);

        var result = new Matrix();
        result.m11 = m11; result.m12 = m12; result.m13 = m13; result.m14 = m14;
        result.m21 = m21; result.m22 = m22; result.m23 = m23; result.m24 = m24;
        result.m31 = m31; result.m32 = m32; result.m33 = m33; result.m34 = m34;
        result.m41 = m41; result.m42 = m42; result.m43 = m43; result.m44 = m44;
        return result;
    }

    /// <summary>
    /// Creates a new translation <see cref="Matrix"/>.
    /// </summary>
    /// <param name="position">X,Y and Z coordinates of translation.</param>
    /// <param name="result">The translation <see cref="Matrix"/> as an output parameter.</param>
    public static createTranslation(position: Vector3) {
        let result = new Matrix();
        result.m11 = 1; result.m12 = 0; result.m13 = 0; result.m14 = 0;
        result.m21 = 0; result.m22 = 1; result.m23 = 0; result.m24 = 0;
        result.m31 = 0; result.m32 = 0; result.m33 = 1; result.m34 = 0;
        result.m41 = position.x; result.m42 = position.y; result.m43 = position.z; result.m44 = 1;
        return result;
    }

    public static createFromAxisAngle(axis: Vector3, angle: number) {
        let x = axis.x;
        let y = axis.y;
        let z = axis.z;
        let num2 = Math.sin(angle);
        let num = Math.cos(angle);
        let num11 = x * x;
        let num10 = y * y;
        let num9 = z * z;
        let num8 = x * y;
        let num7 = x * z;
        let num6 = y * z;
        let result = new Matrix();
        result.m11 = num11 + (num * (1 - num11));
        result.m12 = (num8 - (num * num8)) + (num2 * z);
        result.m13 = (num7 - (num * num7)) - (num2 * y);
        result.m14 = 0;
        result.m21 = (num8 - (num * num8)) - (num2 * z);
        result.m22 = num10 + (num * (1 - num10));
        result.m23 = (num6 - (num * num6)) + (num2 * x);
        result.m24 = 0;
        result.m31 = (num7 - (num * num7)) + (num2 * y);
        result.m32 = (num6 - (num * num6)) - (num2 * x);
        result.m33 = num9 + (num * (1 - num9));
        result.m34 = 0;
        result.m41 = 0; result.m42 = 0; result.m43 = 0; result.m44 = 1;
        return result;
    }

    public createLookAt(eye: Vector3, target: Vector3, up: Vector3) {
        var z = Vector3.normalize(Vector3.subtract(eye, target));
        var x = Vector3.normalize(Vector3.cross(up, z));
        var y = Vector3.cross(z, x);
        this.m11 = x.x; this.m12 = y.x; this.m13 = z.x; this.m14 = 0;
        this.m21 = x.y; this.m22 = y.y; this.m23 = z.y; this.m24 = 0;
        this.m31 = x.z; this.m32 = y.z; this.m33 = z.z; this.m34 = 0;
        this.m41 = -Vector3.dot(x, eye); this.m42 = -Vector3.dot(y, eye); this.m43 = -Vector3.dot(z, eye); this.m44 = 1;
    }

    // 注意: fovyはラジアン
    public createPerspectiveFieldOfView(fovy: number, aspect: number, near: number, far: number) {

        let num = 1 / Math.tan(fovy * Math.PI / 360);
        let num9 = num / aspect;
        this.m11 = num9; this.m12 = this.m13 = this.m14 = 0;
        this.m22 = num;
        this.m21 = this.m23 = this.m24 = 0;
        this.m31 = this.m32 = 0;
        this.m33 = far / (near - far);
        this.m34 = -1;
        this.m41 = this.m42 = this.m44 = 0;
        this.m43 = (near * far) / (near - far);

        //var ymax = near * Math.tan(fovy * Math.PI / 360);
        //var ymin = - ymax;
        //var xmin = ymin * aspect;
        //var xmax = ymax * aspect;

        //this.createPerspective(xmin, xmax, ymin, ymax, near, far);
    }

    public createPerspective(left: number, right: number, bottom: number, top: number, near: number, far: number) {
        var x = 2 * near / (right - left);
        var y = 2 * near / (top - bottom);

        var a = (right + left) / (right - left);
        var b = (top + bottom) / (top - bottom);
        var c = - (far + near) / (far - near);
        var d = - 2 * far * near / (far - near);

        //this.m11 = x; this.m12 = 0; this.m13 = a; this.m14 = 0;
        //this.m21 = 0; this.m22 = y; this.m23 = b; this.m24 = 0;
        //this.m31 = 0; this.m32 = 0; this.m33 = c; this.m34 = d;
        //this.m41 = 0; this.m42 = 0; this.m43 = -1; this.m44 = 0;

        this.m11 = x; this.m12 = 0; this.m13 = 0; this.m14 = 0;
        this.m21 = 0; this.m22 = y; this.m23 = 0; this.m24 = 0;
        this.m31 = a; this.m32 = b; this.m33 = c; this.m34 = -1;
        this.m41 = 0; this.m42 = 0; this.m43 = d; this.m44 = 0;
    }

    public createViewport(width: number, height: number) {

        this.m11 = width / 2; this.m12 = 0; this.m13 = 0; this.m14 = 0;
        this.m21 = 0; this.m22 = -height / 2; this.m23 = 0; this.m24 = 0;
        this.m31 = 0; this.m32 = 0; this.m33 = 1; this.m34 = 0;
        this.m41 = width / 2; this.m42 = height / 2; this.m43 = 0; this.m44 = 1;
    }
}