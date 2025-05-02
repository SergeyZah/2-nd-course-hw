// Задание 1

// const numbers = [1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//     if (numbers[i] === 10) break;
// };


// Задание 2

// const numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 4) {
//         console.log(`Число 4 под индексом: ${i}`)
//     };
// };


// Задание 3

// const numbs = [1, 3, 5, 10, 20];

// let joinNumbs = numbs.join(' ');
// console.log(joinNumbs);


// Задание 4

// const arr = [];

// for (let i = 0; i < 3; i++) {
//     const arr2 = [];
//     for (let i = 0; i < 3; i++) {
//         arr2.push(1);
//     }
//     arr.push(arr2);
// }

// console.log(arr);


// Задание 5

// const arr = [1, 1, 1];

// arr.push(2, 2, 2);

// console.log(arr);


// Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// console.log(arr);

// arr.sort();
// console.log(arr);

// arr.pop();
// console.log(arr);


// Задание 7

// let answer = Number(prompt('Угадайте число'));

// const arr = [9, 8, 7, 6, 5];
// let isArr = arr.includes(answer);

// if (isArr === true) {
//     console.log('Угадал');
// } else {
//     console.log('Не угадал');
// }


// Задание 8

// const string = 'abcdef';
// console.log(string);

// let splitString = string.split('').reverse().join('');
// console.log(splitString);


// Задание 9

// const arr1 = [[1, 2, 3], [4, 5, 6]];
// const arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(...arr1[i]);
// }

// console.log(arr2);


// Задание 10

// const arr = [1, 5, 8, 3, 2, 7, 9, 6, 4, 10];

// for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i] + arr[i + 1]);
// }


// Задание 11

// function square(arr) {
//     return arr.map(item => item ** 2);
// }

// console.log(square([5, 8, 2, 12]));


// Задание 12

// function getLength(arr) {
//     return arr.map(item => item.length);
// }

// console.log(getLength(['hello', 'Hi', 'Morning']));


// Задание 13

// function negativeNumbers(arr) {
//     return arr.filter(item => item < 0);
// }

// console.log(negativeNumbers([-8, 9, 4, -2, 5, 2, 7, -11, 15]));


// Задание 14

function randomNumber() {
    return Math.floor(Math.random() * 10);
}

const arr = [];
const evenArr = [];

for (let i = 0; i < 10; i++) {
    arr.push(randomNumber());
}

for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
        evenArr.push(arr[i]);
    }
}

console.log(arr);
console.log(evenArr);
