/*
 Класс управления игрой. Задает клавиши и обработчики событий по нажатию на заданные клавиши.
 По умолчанию используются кнопки UP (вверх), DOWN(вниз), LEFT(влево), RIGHT(вправо), SPACE(пауза)
 */
function Gamepad(snake) {
    var self = this;
    var buttons = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39,
        SPACE: 32
    };

    /*
     Объект, хранящий соотвествие направления движения и нажатой кнопки
     */
    var moving = {
        UP: new KeyCodeAndDirections(buttons.UP, DIRECTIONS.DOWN, DIRECTIONS.UP),
        DOWN: new KeyCodeAndDirections(buttons.DOWN, DIRECTIONS.UP, DIRECTIONS.DOWN),
        LEFT: new KeyCodeAndDirections(buttons.LEFT, DIRECTIONS.RIGHT, DIRECTIONS.LEFT),
        RIGHT: new KeyCodeAndDirections(buttons.RIGHT, DIRECTIONS.LEFT, DIRECTIONS.RIGHT)
    };

    /*
     Объект контекста, содержащий keyCode и функцию соотвествующий ей.
     */
    var contextKeyHandler = function () {
        var keyHandlers = {};
        Object.keys(moving).forEach(function (key) {
            var keyCodeAndDirections = moving[key];
            keyHandlers[keyCodeAndDirections.keyCode] = changeDirection(keyCodeAndDirections.direction);
        });
        keyHandlers[buttons.SPACE] = function () {
            alert("Pause");
        };
        return keyHandlers;
    };

    /*
     Меняет направление движение. Исли нажата кнопка соотвествующая обратному направлению движения змеи, возвращает пустую функци.
     Возвращает функцию, задающую направление движение змеи.
     */
    function changeDirection(direction) {
        if (snake.getDirection() === direction.opposite) {
            return function () {
            };
        }
        return function () {
            snake.setDirection(direction.forward);
        }
    }

    /*
     Обработчик событий нажатия клавиши
     */
    this.keyHandler = function (event) {
        var context = contextKeyHandler();
        if (Object.keys(context).indexOf("" + event.keyCode) > -1)
            context[event.keyCode]();
        // switch (event.keyCode) {
        //     case buttons.RIGHT:
        //         if (snake.getDirection() === DIRECTIONS.LEFT) break;
        //         snake.setDirection(DIRECTIONS.RIGHT);
        //         break;
        //     case buttons.LEFT:
        //         if (snake.getDirection() === DIRECTIONS.RIGHT) break;
        //         snake.setDirection(DIRECTIONS.LEFT);
        //         break;
        //     case buttons.UP:
        //         if (snake.getDirection() === DIRECTIONS.DOWN) break;
        //         snake.setDirection(DIRECTIONS.UP);
        //         break;
        //     case buttons.DOWN:
        //         if (snake.getDirection() === DIRECTIONS.UP) break;
        //         snake.setDirection(DIRECTIONS.DOWN);
        //         break;
        // }
    };

    /*
     Класс KeyCodeAndDirections. Принимает keyCode код кнопки, oppositeDirection соотвествующее ему направление и
     forwardDirection противоположное ему направление.
     Возвращает объект с ключами keyCode, direction. Значение по ключу direction тоже объект с полями forward и opposite
     */
    function KeyCodeAndDirections(keyCode, oppositeDirection, forwardDirection) {
        this.keyCode = keyCode;
        this.direction = {
            forward: forwardDirection,
            opposite: oppositeDirection
        }
    }

    document.addEventListener("keydown", self.keyHandler);
}