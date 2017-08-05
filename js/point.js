/*
 Базовый класс, от которого наследуются Яблоко и КусокЗмеи
 */
function Point(posHeight, posWidth) {
    var self = this;
    this.width = posWidth;
    this.height = posHeight;

    /*
     Сравнивает текущую точку с переданной. Если обе координаты равны возвращает истину иначе ложь.
     */
    this.equals = function (point) {
        return self.height == point.height && self.width == point.width;
    }
}