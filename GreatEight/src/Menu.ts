

namespace Menu {

    enum State {
        Title,
    }
    let state = State.Title;


    function drawTitle() {

        Renderer.drawText("Great Eight", "120px 'ＭＳ Ｐゴシック'");
    }



    export function draw() {
        switch (state) {
            case State.Title:
                drawTitle();
                break;
            default:
                break;
        }
    }
}