/*
 Класс Змеи. На вход принимает объект класса Render
 */
function Snake(render) {
    var self = this;
    var _direction = constants.DEFAULT_DIRECTION;
    this._render = render;
    /*
     Счетчик съеденных яблок
     */
    this.countEattenApples = 0;
    /*
     Тело змеи
     */
    this.body = [];

    this.getDirection = function () {
        return _direction;
    };

    this.setDirection = function (direction) {
        _direction = direction;
    };

    /*
     Возравщает длину тела змеи
     */
    this.length = function () {
        return self.body.length;
    };

    /*
     Функция поедания яблока. Инкрементирует счетчик съеденных яблок.
     */
    this.eat = function (apple) {
        apple.wasEatten = true;
        this.countEattenApples++;
        render.setCellColor(apple, SNAKE.BORDER_COLOR);
    };

    /*
     Возвращает копию головы змеи.
     */
    this.getHead = function () {
        var head = self.body[self.body.length - 1];
        return new SnakePiece(head.height, head.width);
    };

    /*
     Приводит змею в движение, перемещает голову, убирает хвост, в случае если на пути находится яблоко, съедает его.
     */
    this.move = function (apple) {
        var head = self.moveTo(self.getDirection());
        if (head.equals(apple)) {
            self.eat(apple);
            return;
        }
        var tail = self.body.shift();
    };

    /*
     Шаг движения змеи с учетом направления (direction). Прибавляет к координатам головы змеи значения указанные в direction.
     Проверяет на возможность коллизии, т.е. встрече на своем пути своего тела.
     */
    this.moveTo = function (direction) {
        var head = self.getHead();
        head.height = hieght(head.height + direction.height);
        head.width = width(head.width + direction.width);

        if (isCollision(head)) {
            new GameOver(self).stop();
            return head;
        }

        function hieght(value) {
            return calculateCoordinate(value, constants.SIZE_HEIGHT);
        }

        function width(value) {
            return calculateCoordinate(value, constants.SIZE_WIDTH);
        }

        function calculateCoordinate(value, maxValue) {
            if (value > maxValue) {
                return value - maxValue;
            }
            return value < 1 ? (maxValue - value) : value;
        }

        self.body.push(head);
        return head;
    };

    /*
     Определяет пересечение головы и тела. Возвращает истину если столкноение было обнаружено.
     */
    function isCollision(head) {
        return self.body.map(function (piece) {
                return piece.equals(head)
            }).indexOf(true) > -1;
    }

    /*
     Заполняет массив змейки согласно начальной длине. Насальные координаты в точке 1,1
     */
    function initialize() {
        var length = 1;
        var snakePiece = new SnakePiece(1, 1);
        self.body.push(snakePiece);
        // moveHead(snakePiece);
        while (length++ < SNAKE.INITIAL_LENGTH) {
            self.moveTo(_direction);
        }
    }

    initialize();
}