/*
 Создаем у массива метод по вычислению разности двух массивов. Возвращает массив уникальных элементов.
 */
Array.prototype.difference = function (array) {
    return this.filter(function (index) {
        return array.indexOf(index) < 0;
    });
};

/*
 Создает массив последовательности чисел от 1 до to
 */
function generateSequence(to) {
    return Array.apply(null, {length: to + 1}).map(Function.call, Number).slice(1);
}
/*
 Генерерует псевдослучайное число между min и max
 */
function generate(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}