document.getElementById('playGame2').addEventListener('click', function () {

    const operators = ['+', '-', '*', '/'];
    const funcOper = operators[Math.floor((Math.random() * operators.length))];
    let numb1 = Math.floor(Math.random() * 10) + 1;
    let numb2 = Math.floor(Math.random() * 10) + 1;

    switch (funcOper) {
        case '+':
            userAnswer = prompt(`Найдите сумму чисел ${numb1} и ${numb2}`);
            result = numb1 + numb2;
            break;
        case '-':
            userAnswer = prompt(`Найдите разность чисел ${numb1} и ${numb2}`);
            result = numb1 - numb2;
            break;
        case '*':
            userAnswer = prompt(`Найдите произведение чисел ${numb1} и ${numb2}`);
            result = numb1 * numb2;
            break;
        case '/':
            if (numb1 > numb2) {
                userAnswer = prompt(`Разделите ${numb1} на ${numb2} и округлите ответ до целого числа`);
                result = numb1 / numb2;
                break;
            } else {
                userAnswer = prompt(`Разделите ${numb2} на ${numb1} и округлите ответ до целого числа`);
                result = numb2 / numb1;
                break;
            };
        default:
            alert("Ошибка");
    }

    if (Number(userAnswer) === Math.round(result)) {
        alert("Верно");
    } else if (userAnswer === null) {
        alert("До новых встреч!");
    } else if (userAnswer === "") {
        alert("Нет ответа(");
    } else {
        alert("Неверно");
    }
})
