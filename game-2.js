document.getElementById('playGame2').addEventListener('click', function () {
    const operators = ['+', '-', '*', '/'];
    // const funcOper = operators[Math.floor((Math.random() * operators.length))];
    const funcOper = '/';
    let numb1 = Math.floor(Math.random() * 10) + 1;
    let numb2 = Math.floor(Math.random() * 10) + 1;

    let userAnswer = "";

    switch (funcOper) {
        case '+':
            userAnswer = Number(prompt(`Найдите сумму чисел ${numb1} и ${numb2}`));
            result = numb1 + numb2;
            break;
        case '-':
            userAnswer = Number(prompt(`Найдите разность чисел ${numb1} и ${numb2}`));
            result = numb1 - numb2;
            break;
        case '*':
            userAnswer = Number(prompt(`Найдите произведение чисел ${numb1} и ${numb2}`));
            result = numb1 * numb2;
            break;
        case '/':
            userAnswer = Number(prompt(`Разделите ${numb1} на ${numb2} и округлите ответ до целого числа`));
            result = numb1 / numb2;
            break;
        default:
            alert("Ошибка");
    }

    if (userAnswer === Math.round(result)) {
        alert("Верно");
    } else {
        alert("Неверно");
    }
})
