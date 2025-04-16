// Задание 1

for (let i = 1; i < 3; i++) {
    console.log('Привет');
}

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4

const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400
}

for (let key in obj) {
    console.log(`${key} - ${obj[key]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    console.log(n);
    num++;
}

console.log(`Кол-во итераций: ${num}`);

// Задание 6

let dayFriday = 3;
let allDay = 31;

for (i = dayFriday; i <= allDay; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчёт.`);
}

// Дополнительные задания
// Задание 1

let k = 100;
let iterations = 0

while (k > 0) {
    k -= 7;
    iterations++;
}

console.log(`Результат вычитаний: ${k}`);
console.log(`Необходимое количество итераций: ${iterations}`);

// Задание 2

for (let i = 1; i <= 12; i++) {

    var months = i;
    switch (months) {
        case 1:
            console.log(`Месяц: январь. Поряковый номер: ${i}`);
            break;
        case 2:
            console.log(`Месяц: февраль. Поряковый номер: ${i}`);
            break;
        case 3:
            console.log(`Месяц: март. Поряковый номер: ${i}`);
            break;
        case 4:
            console.log(`Месяц: апрель. Поряковый номер: ${i}`);
            break;
        case 5:
            console.log(`Месяц: май. Поряковый номер: ${i}`);
            break;
        case 6:
            console.log(`Месяц: июнь. Поряковый номер: ${i}`);
            break;
        case 7:
            console.log(`Месяц: июль. Поряковый номер: ${i}`);
            break;
        case 8:
            console.log(`Месяц: август. Поряковый номер: ${i}`);
            break;
        case 9:
            console.log(`Месяц: сентябрь. Поряковый номер: ${i}`);
            break;
        case 10:
            console.log(`Месяц: октябрь. Поряковый номер: ${i}`);
            break;
        case 11:
            console.log(`Месяц: ноябрь. Поряковый номер: ${i}`);
            break;
        case 12:
            console.log(`Месяц: декабрь. Поряковый номер: ${i}`);
            break;
        default:
            console.log('Больше месяцев нет');
    }
}

// Задание 3

const book = {
    name: 'Братья Карамазовы',
    author: 'Фёдор Достоевский',
    yearPublication: 1880,
    genre: 'роман'
}

for (let key in book) {
    console.log(`${key}: ${book[key]}`);
}

// Задание 4

let array = [2, 5, 3, -8, 1, 15, 7, 12, 4, 19];
minVal = Infinity;

for (let key in array) {
    if (array[key] < minVal) {
        minVal = array[key];
    }
}

console.log(`Минимальное число: ${minVal}`);