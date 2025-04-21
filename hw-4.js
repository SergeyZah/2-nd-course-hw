// Задание 1

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(40, 10));


// Задание 2

function isEven(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(isEven(3));


// Задание 3

function square(r) {
    return r ** 2
}

console.log(square(3));

let newSquare = square(4);

console.log(newSquare);


// Задание 4

function questionAge(age) {

    if (age < 0) {
        alert('Вы ввели неправильное значение');

    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}

questionAge(prompt('Сколько тебе лет?'));


// Задание 5

function checkNumber(numberOne, numberTwo) {

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        console.log('Одно или оба значения не являются числом');
    } else {
        return numberOne * numberTwo;
    }
}

console.log(checkNumber(Number(prompt('Введите первое число')), Number(prompt('Введите второе число'))));


