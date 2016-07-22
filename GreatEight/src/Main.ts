/// <reference path="./common/math/Matrix.ts" />

/// <reference path="./SoccerPitch.ts" />
/// <reference path="./Game.ts" />
/// <reference path="./Menu.ts" />
/// <reference path="./KeyboardState.ts" />
/// <reference path="./Renderer.ts" />

namespace Main {

    enum State {
        Menu,
        Game,
    }

    let state = State.Menu;

    var startTime = new Date().getTime();


    var soccerPitch = new SoccerPitch();
    var fieldPlayer = new FieldPlayer();

    var keyboard = new KeyboardState();

    export function initialize() {
        Renderer.initialize();
        update();
    }

    function update() {
        requestAnimationFrame(update);

        let currentTime = new Date().getTime();
        let dt = currentTime - startTime;
        startTime = currentTime;


        let acceleration = new Vector3();
        if (keyboard.pressed("up")) {
            Renderer.distance += 0.1;
            //acceleration.add(new Vector3(0, 0.005, 0));
        }

        if (keyboard.pressed("down")) {
            Renderer.distance -= 0.1;
            //acceleration.add(new Vector3(0, -0.005, 0));
        }



        if (keyboard.pressed("left")) {
            Renderer.angle += 0.1;
            //acceleration.add(new Vector3(-0.005, 0, 0));
        }

        if (keyboard.pressed("right")) {
            Renderer.angle -= 0.1;
            //acceleration.add(new Vector3(0.005, 0, 0));
        }

        fieldPlayer.setAcceleration(acceleration);

        if (keyboard.pressed("w")) {
            Renderer.height += 0.1;
            //fieldPlayer.setAcceleration(new Vector3(0.01, 0, 0));
        }

        if (keyboard.pressed("s")) {
            Renderer.height -= 0.1;
            //fieldPlayer.setAcceleration(new Vector3(0.01, 0, 0));
        }

        if (keyboard.pressed("q")) {
            Renderer.offsetX += 10;
            //fieldPlayer.setAcceleration(new Vector3(0.01, 0, 0));
        }

        if (keyboard.pressed("e")) {
            Renderer.offsetX -= 10;
            //fieldPlayer.setAcceleration(new Vector3(0.01, 0, 0));
        }

        soccerPitch.update();
        fieldPlayer.update(dt);
        draw();
    }

    function draw() {

        switch (state) {
            case State.Menu:
                Menu.draw();
                break;
            case State.Game:
                soccerPitch.draw();
                fieldPlayer.draw();

                Renderer.draw();
                break;
            default:
                break;

        }
    }

}

window.onload = (ev) => {
    Main.initialize();
}