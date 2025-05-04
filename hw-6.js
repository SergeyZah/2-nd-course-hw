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


