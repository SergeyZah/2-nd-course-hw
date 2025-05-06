// Задание 1

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));


// Задание 2

function isPositive(a) {

    if (a > 0) {
        return a;
    } else {
        return;
    }
}

function isMale(a) {

    if (a.gender === 'male') {
        return a;
    }
}

function filter(arr, ruleFunction) {

    const output = [];

    for (let i = 0; i < arr.length; i++) {

        if (ruleFunction(arr[i])) {
            output.push(ruleFunction(arr[i]));
        }
    }
    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

