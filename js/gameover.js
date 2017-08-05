/*
 Класс Окончания игры. Выводит сообщение и останавливает игру.
 */
function GameOver(snake) {
    /*
     Выводит сообщение об окончании игры.
     */
    var showMessage = function () {
        alert("You win! Your score is " + snake.countEattenApples);
    };
    /*
     Выводит сообщение об окончании игры и останавливает игрую
     */
    this.stop = function () {
        showMessage();
        clearInterval(intervalId);
    }
}