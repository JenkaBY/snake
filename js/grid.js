/*
 Класс, создающий поле-сетку для движения змеи
 */
function Grid(containerId) {
    var self = this;

    var gridContainer = document.getElementById(containerId);

    /*
     Создает сетку из ячеек(Cell) .
     */
    this.create = function () {
        verticalSeq.forEach(function (indexRow) {
            var row = createRow(indexRow);
            horizontalSeq.forEach(function (indexColumn) {
                row.appendChild(createCell(indexRow, indexColumn))
            });
            gridContainer.appendChild(row);
        });
    };

    /*
     Сбрасывает фоновый цвет для всех ячеек(Cell) текущуй сетки.
     */
    this.refresh = function () {
        verticalSeq.forEach(function (indexRow) {
            horizontalSeq.forEach(function (indexColumn) {
                self.getCellBy(indexRow, indexColumn).style.backgroundColor = "";
            });
        });
    };

    /*
     Возвращает и возвращает строквое значение id в формате 'height,width'
     */
    this.cellId = function (height, width) {
        return height + "," + width;
    };

    /*
     Возвращает элемент DOM (ячейку Cell) по id в формате 'height,width'
     */
    this.getCellBy = function (height, width) {
        return document.getElementById(self.cellId(height, width));
    };

    /*
     Создает и возвращает DIV элемент
     */
    function createDiv() {
        return document.createElement('div');
    }

    /*
     Создает DIV элемент DOM с классом 'row'
     */
    function createRow() {
        var result = createDiv();
        result.setAttribute('class', 'row');
        return result;
    }

    /*
     Устанавливает свойства элемента согласно размерам ячейки(Cell) указанному в параметре CELL.SIZE, и стиль границы указанные в параметрах
     CELL.BORDER_WIDTH, CELL.BORDER_STYLE, CELL.BORDER_COLOR
     */
    function setCellStyle(element, text) {
        element.style.height = CELL.SIZE + "px";
        element.style.width = CELL.SIZE + "px";
        element.style.border = CELL.BORDER_WIDTH + "px " + CELL.BORDER_STYLE + " " + CELL.BORDER_COLOR;
        // element.innerText = text || ""; //для отладки
    }

    /*
     Создает и возвращает DIV элемент с классом "cell" и id = "height,width"
     */
    function createCell(height, width) {
        var result = createDiv();
        result.setAttribute("class", "cell");
        result.setAttribute("id", self.cellId(height, width));
        setCellStyle(result, self.cellId(height, width));
        return result;
    }

    /*
     Устанавливает размеры и границы контейнера сетки
     */
    function initializeGridContainer() {
        gridContainer.style.width = (18 * CELL.BORDER_WIDTH + CELL.SIZE) * constants.SIZE_WIDTH + 4 + "px";
        gridContainer.style.height = (18 * CELL.BORDER_WIDTH + CELL.SIZE) * constants.SIZE_HEIGHT + 4 + "px";
    }

    initializeGridContainer();
}
