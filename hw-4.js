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


// Задание 6

const figure = Number(prompt('Введите число'));
function cube(figure) {

    if (isNaN(figure)) {
        console.log('Переданный параметр не является числом');
        return;
    } else {
        return figure ** 3;
    }
}

let result = cube(figure);

console.log(`${figure} в кубе равняется ${result}`);


// Задание 7

const circle1 = {
    radius: 3,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimetr() {
        return 2 * Math.PI * this.radius
    }
};

const circle2 = {
    radius: 4,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimetr() {
        return 2 * Math.PI * this.radius
    }
};

console.log(`Площадь первого круга: ${circle1.getArea()}`);
console.log(`Периметр первого круга: ${circle1.getPerimetr()}`);

console.log(`Площадь второго круга: ${circle2.getArea()}`);
console.log(`Периметр второго круга: ${circle2.getPerimetr()}`);