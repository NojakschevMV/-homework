"use strict";


function start() {
  let health = 10;
  // Функция рандомного числа
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  // Проверка что введено число
  let isNumber = function (n) {
    if (!isNaN(parseFloat(n)) && isFinite(n)) {
      return true;
    }

  };
  //Победа
  function victory() {
    if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?') === true) {
      start();

    } else {
      console.log("Досвидания");
    }
  }
  //Поражение
  function defeat() {
    if (health === 0) {
      if (confirm('Попытки закончились, хотите сыграть еще?') === true) {
        start();
      } else {
        console.log("Досвидания");
      }
    }
  }
  //выбирается рандомное число
  let integer = getRandomInt(1, 100);
  //Количество попыток


  //console.log('Загаданное число ' + integer); ответ

  //спрашивает пользователя: "Угадай число от 1 до 100".
  let num = prompt("Угадай число от 1 до 100?");
  //ошибка
  function error() {
    //num = prompt("Введи число!");
    if (num = prompt("Введи число!") === true) {
      enterNumber();
    } else {
      console.log('Досвидания');
    }


  }

  function enterNumber() {
    //Если введено число больше
    function enterNumberBig(n) {
      health--;
      if (health > 0) {
        num = prompt("Загаданное число меньше, осталось попыток: " + health);
        if (isNumber(num)) {
          enterNumber();
        } else {
          error();
        }
      } else {
        defeat();
      }
    }
    //Если введено число меньше
    function enterNumberlittle(n) {
      health--;
      if (health > 0) {
        num = prompt("Загаданное число больше, осталось попыток: " + health);
        if (isNumber(num)) {
          enterNumber();
        } else {
          error();
        }
      } else {
        defeat();
      }
    }


    if (isNumber(num)) {
      if (num > integer) {
        enterNumberBig(num);
      } else if (num < integer) {
        enterNumberlittle(num);
      } else if (num == integer) {
        victory();
      }
    } else {

      error();


    }
  }
  enterNumber();

}
start();