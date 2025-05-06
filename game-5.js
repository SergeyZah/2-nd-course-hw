document.getElementById('playGame5').addEventListener('click', function () {

    const quiz = [
        {
            question: "Каким цветом небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Пять", "2. Шесть", "3. Семь"],
            correctAnswer: 3
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let pointUser = 0;

    for (let i = 0; i < quiz.length; i++) {
        const answerUser = prompt(`Ответьте на вопрос: "${quiz[i].question}", выбрав правильный вариант ответа: ${quiz[i].options}`);

        if (answerUser === null) {
            alert('До новых встреч!')
            break;
        } else if (Number(answerUser) === quiz[i].correctAnswer) {
            pointUser++;
            alert('Верно')
        } else {
            alert('Неверно')
        }
    }

    alert(`Количество правильных ответов: ${pointUser}`);
})