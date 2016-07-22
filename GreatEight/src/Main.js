var Main;
(function (Main) {
    var startTime = new Date().getTime();
    function initialize() {
        update();
    }
    Main.initialize = initialize;
    function update() {
        requestAnimationFrame(update);
    }
})(Main || (Main = {}));
//# sourceMappingURL=Main.js.map