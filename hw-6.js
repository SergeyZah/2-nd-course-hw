// Задание 1

const string = 'js';

console.log(string);
console.log(string.toUpperCase());


// Задание 2

function searchString(array, string) {

    array.forEach((product) => {
        if (product.toLowerCase().startsWith(string.toLowerCase())) {
            console.log(product);
        }
    })
}

const a = ['Молоко пастеризованное', 'Хлеб бородинский', 'Сыр классический', 'Молоко безлактозное', 'Колбаса вареная', 'Молоко топленое', 'Молоко парное'];
const b = 'молоко';

console.log(a);
searchString(a, b);


// Задание 3

const number = 32.58884;

console.log(`Дано число: ${number}`);
console.log(`Округление до меньшего числа: ${Math.floor(number)}`);
console.log(`Округление до большего числа: ${Math.ceil(number)}`);
console.log(`Округление до ближайшего целого числа: ${Math.round(number)}`);


// Задание 4

const arr = [52, 53, 49, 77, 21, 32];

console.log(arr);
console.log(`Минимальное число: ${Math.min(...arr)}`);
console.log(`Максимальное число: ${Math.max(...arr)}`);


// Задание 5

function randomNumber() {

    let number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
}

randomNumber();


