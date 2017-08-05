/*
 Класс Яблоко, то что ест змея. Наследуются от класса Point.
 Принимает на вход координаты posHeight - положение по высоте, posWidth - положение по ширине
 */
function Apple(posHeight, posWidth) {
    Point.apply(this, arguments);

    /*
     Свойство указывающее, что яблоко было съедено.
     */
    this.wasEatten = false;
}