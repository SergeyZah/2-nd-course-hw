// Задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));


// Задание 2

// function isPositive(a) {

//     if (a > 0) {
//         return a;
//     } else {
//         return;
//     }
// }

// function isMale(a) {

//     if (a.gender === 'male') {
//         return a;
//     }
// }

// function filter(arr, ruleFunction) {

//     const output = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (ruleFunction(arr[i])) {
//             output.push(ruleFunction(arr[i]));
//         }
//     }
//     return output;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//     { name: 'Глеб', gender: 'male' },
//     { name: 'Анна', gender: 'female' },
//     { name: 'Олег', gender: 'male' },
//     { name: 'Оксана', gender: 'female' }
// ];

// console.log(filter(people, isMale));


// Задание 3

// const timer = (deadline) => {
//     const date = new Date();
//     console.log(date.toLocaleDateString('ru-RU'));
//     const interval = setInterval(() => {
//         console.log(date.toLocaleDateString('ru-RU'));
//     }, 3000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log(`${deadline} секунд прошло`)
//     }, deadline * 1000)
// };

// timer(30);


// Задание 4

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})