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




