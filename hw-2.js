// Задание 1
let password = '1U4s2E3r';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
    console.log("Пароль введён верно");
} else {
    console.log("Пароль введён неверно");
}

// Задание 2
let c = Number(prompt('Введите любое число'));
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 3
let d = Number(prompt('Введите число'));
let e = Number(prompt('Введите ещё одно число'));
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// Задание 4
let a = '2';
let b = '3';
alert(+a + +b);

// Задание 5
let monthNumber = prompt('Введите номер месяца');
switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        console.log('Зимний месяц');
        break;
    case '3':
    case '4':
    case '5':
        console.log('Весенний месяц');
        break;
    case '6':
    case '7':
    case '8':
        console.log('Летний месяц');
        break;
    case '9':
    case '10':
    case '11':
        console.log('Осенний месяц');
        break;
    default:
        console.log('Ввели что-то не то');
}

// Дополнительные задания
// Задание 1
let quantity = (prompt('Пожалуйста, введите любое число'));
if (isNaN(quantity) === true) {
    console.log("Надо число");
} else if (quantity % 2 === 0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное");
}

// Задание 2
let clientOS = prompt('Введите операционную систему устройства (iOS или Android)')
switch (clientOS) {
    case 'iOS':
        console.log('Установите версию приложения для iOS по ссылке');
        break;
    case 'Android':
        console.log('Установите версию приложения для Android по ссылке');
        break;
    default:
        console.log('Надо 0 или 1');
}

// Задание 3
let clientOS = prompt('Введите операционную систему устройства (iOS или Android)');
let clientDeviceYear = Number(prompt('Введите год производства вашего телефона'));
switch (clientOS) {
    case 'iOS':
        if (clientDeviceYear > 2015) {
            console.log('Установите версию приложения для iOS по ссылке');
        } else {
            console.log('Установите облегчённую версию приложения для iOS по ссылке')
        }
        break;
    case 'Android':
        if (clientDeviceYear > 2015) {
            console.log('Установите версию приложения для Android по ссылке');
        } else {
            console.log('Установите облегчённую версию приложения для Android по ссылке')
        }
        break;
    default:
        console.log('Надо 0 или 1');
}
