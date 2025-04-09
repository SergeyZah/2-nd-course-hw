// Задание 1
let a = Number(10);
alert(a);
a = Number(20);
alert(a);

// Задание 2
const year = Number(2007);
alert(year);

// Задание 3
const creatorName = "Brendan Eich";
alert(creatorName);

// Задание 4
let x = 10;
let y = 2;

let sum = x + y;
alert(sum);

let difference = x - y;
alert(difference);

let product = x * y;
alert(product);

let quotient = x / y;
alert(quotient);

// Задание 5
let b = 2;
let c = 5;

let result = b ** c;
alert(result);

// Задание 6
a = 9;
b = 2;

let remainder = a % b;
alert(remainder);

// Задание 7
let num = 1;

num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num);

// Задание 8
let age = Number(prompt("Сколько вам лет?"));
alert(age);

// Задание 9
let user = {
    name: 'Jack',
    age: 27,
    isAdmin: true
};
console.log(user);

// Задание 10
let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

// Дополнительное задание
let number = prompt('Загадайте любое число')

number1 = number * 2;
alert(`Удвойте загаданное число, получаем ${number1}`);

number2 = number1 + 10;
alert(`К удвоенному числу прибавьте 10, получаем ${number2}`);

number3 = number2 / 2;
alert(`Полученное число разделите на 2, получаем ${number3}`);

number4 = number3 - number;
alert(`Отнимите загаданное число от результата, итог всегда будет один, равный ${number4}`);