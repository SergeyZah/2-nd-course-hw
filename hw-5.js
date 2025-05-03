// Задание 1

const numbers1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
    if (numbers1[i] === 10) break;
};


// Задание 2

const numbers2 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] === 4) {
        console.log(`Число 4 под индексом: ${i}`)
    };
};


// Задание 3

const numbs3 = [1, 3, 5, 10, 20];

let joinNumbs = numbs3.join(' ');
console.log(joinNumbs);


// Задание 4

const arr4 = [];

for (let i = 0; i < 3; i++) {
    const arr42 = [];
    for (let i = 0; i < 3; i++) {
        arr42.push(1);
    }
    arr4.push(arr42);
}

console.log(arr4);


// Задание 5

const arr5 = [1, 1, 1];

arr5.push(2, 2, 2);

console.log(arr5);


// Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5];
console.log(arr6);

arr6.sort();
console.log(arr6);

arr6.pop();
console.log(arr6);


// Задание 7

let answer = Number(prompt('Угадайте число'));

const arr7 = [9, 8, 7, 6, 5];
let isArr = arr7.includes(answer);

if (isArr) {
    console.log('Угадал');
} else {
    console.log('Не угадал');
}


// Задание 8

const string = 'abcdef';
console.log(string);

let splitString = string.split('').reverse().join('');
console.log(splitString);


// Задание 9

const arr1 = [[1, 2, 3], [4, 5, 6]];
const arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    arr2.push(...arr1[i]);
}

console.log(arr2);


// Задание 10

const arr10 = [1, 5, 8, 3, 2, 7, 9, 6, 4, 10];

for (let i = 0; i < arr10.length - 1; i++) {
    console.log(arr10[i] + arr10[i + 1]);
}


// Задание 11

function square(arr) {
    return arr.map(item => item ** 2);
}

console.log(square([5, 8, 2, 12]));


// Задание 12

function getLength(arr) {
    return arr.map(item => item.length);
}

console.log(getLength(['hello', 'Hi', 'Morning']));


// Задание 13

function negativeNumbers(arr) {
    return arr.filter(item => item < 0);
}

console.log(negativeNumbers([-8, 9, 4, -2, 5, 2, 7, -11, 15]));


// Задание 14

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const arr14 = [];
const evenArr = [];

for (let i = 0; i < 10; i++) {
    arr14.push(randomNumber());
}

for (let i = 0; i < arr14.length; i++) {

    if (arr14[i] % 2 === 0) {
        evenArr.push(arr14[i]);
    }
}

console.log(arr14);
console.log(evenArr);


// Задание 15

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 6; i++) {
    arr.push(randomNumber());
}

console.log(arr);
console.log(arr.reduce((a, b) => a + b) / arr.length);