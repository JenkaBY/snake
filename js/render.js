function Render() {
    var self = this;
    var grid = new Grid("gridContainer");
    grid.create();
    var _snake = new Snake(self);

    var appleBuilder = new AppleBuilder(_snake);
    var _apple = appleBuilder.build();
    new Gamepad(_snake);

    /*
     Перерисовывет объекты змеи и яблока
     */
    this.draw = function () {
        grid.refresh();
        if (_apple) self.setCellColor(_apple, APPLE.COLOR);

        _snake.body.forEach(function (snakePiece) {
            self.setCellColor(snakePiece, SNAKE.COLOR);
        });
    };

    /*
     Устанавливает цвет color ячейки для точки с координатами point. Если цвет не передан, то устанавливает пустое значениею
     */
    this.setCellColor = function (point, color) {
        var cell = grid.getCellBy(point.height, point.width);
        cell.style.backgroundColor = color || "";
    };

    /*
     Запуск рендера
     */
    this.run = function () {
        self.draw();

        while (_apple.wasEatten) {
            _apple = appleBuilder.build();
        }
        _snake.move(_apple);
    }
}