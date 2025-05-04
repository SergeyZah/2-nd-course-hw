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


