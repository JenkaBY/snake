window.onload = function () {
    var render = new Render();
    intervalId = setInterval(render.run, constants.GAME_SPEED);
};