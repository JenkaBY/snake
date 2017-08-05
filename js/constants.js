var intervalId;

var DIRECTIONS = {
    UP: new Point(-1, 0),
    DOWN: new Point(1, 0),
    LEFT: new Point(0, -1),
    RIGHT: new Point(0, 1)
};

var constants = {
    DEFAULT_DIRECTION: DIRECTIONS.RIGHT,
    SIZE_HEIGHT: 10,
    SIZE_WIDTH: 10,
    GAME_SPEED: 150
};

var SNAKE = {
    COLOR: "green",
    INITIAL_LENGTH: 3
};

var CELL = {
    BORDER_WIDTH: 0.1,
    BORDER_COLOR: "beige",
    BORDER_STYLE: "solid",
    SIZE: 30
};

var APPLE = {
    COLOR: "red"
};

var horizontalSeq = generateSequence(constants.SIZE_WIDTH);
var verticalSeq = generateSequence(constants.SIZE_HEIGHT);