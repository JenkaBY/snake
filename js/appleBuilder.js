/*
 Класс строитель, возвращающий объекты Яблока на основании координат тела змеи python.
 */
function AppleBuilder(python) {
    var _snake = python;

    /*
     Создает новое объект Яблоко (Apple) на основании координат полученных в функции generateCoordinates()
     */
    this.build = function () {
        var coordinates = generateCoordinates();
        return new Apple(coordinates.height, coordinates.width);
    };

    /*
     Создает и возвращает анонимный объект с рандомными координатами яблока, учитывает координаты тела змеи.
     */
    function generateCoordinates() {
        var heightArray = verticalSeq.difference(getSnakeCoordinates().height);
        var widthArray = horizontalSeq.difference(getSnakeCoordinates().width);
        return {
            height: heightArray[generate(0, heightArray.length)],
            width: widthArray[generate(0, widthArray.length)]
        };
    }

    /*
     Создает и возвращает объект { height : [..], width : [..]} с координатами тела змеи
     */
    function getSnakeCoordinates() {
        var snakeBody = _snake.body;
        var coordinates = {height: [], width: []};
        snakeBody.forEach(function (piece) {
            addPiece(coordinates, piece);
        });

        function addPiece(jCoordinates, piece) {
            add('height');
            add('width');

            function add(property) {
                (jCoordinates[property].indexOf(piece[property]) < 0) ? jCoordinates[property].push(piece[property]) : "";
            }
        }

        return coordinates;
    }
}