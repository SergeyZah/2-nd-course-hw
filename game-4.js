document.getElementById('playGame4').addEventListener('click', function () {

    const userChoice = prompt('Выберете: камень, ножницы или бумага');

    const choice = ['камень', 'ножницы', 'бумага']
    const compChoice = choice[Math.floor(Math.random() * choice.length)];

    if (userChoice === null) {
        alert('До свидания!')
    } else {
        switch (userChoice.toLowerCase()) {
            case 'камень':
                if (compChoice === 'камень') {
                    alert(`НИЧЬЯ. У вас ${userChoice} и у компьютера ${compChoice}`);
                    break;
                } else if (compChoice === 'ножницы') {
                    alert(`ПОБЕДА. У вас ${userChoice}, а у компьютера ${compChoice}`);
                    break;
                } else if (compChoice === 'бумага') {
                    alert(`ПОРАЖЕНИЕ. У вас ${userChoice}, а у компьютера ${compChoice}`);
                    break;
                } else {
                    alert('Ввели что-то не то')
                    break;
                }
            case 'ножницы':
                if (compChoice === 'камень') {
                    alert(`ПОРАЖЕНИЕ. У вас ${userChoice}, а у компьютера ${compChoice}`);
                    break;
                } else if (compChoice === 'ножницы') {
                    alert(`НИЧЬЯ. У вас ${userChoice} и у компьютера ${compChoice}`);
                    break;
                } else if (compChoice === 'бумага') {
                    alert(`ПОБЕДА. У вас ${userChoice}, а у компьютера ${compChoice}`);
                    break;
                } else {
                    alert('Ввели что-то не то')
                    break;
                }
            case 'бумага':
                if (compChoice === 'камень') {
                    alert(`ПОБЕДА. У вас ${userChoice}, а у компьютера ${compChoice}`);
                    break;
                } else if (compChoice === 'ножницы') {
                    alert(`ПОРАЖЕНИЕ. У вас ${userChoice}, а у компьютера ${compChoice}`);
                    break;
                } else if (compChoice === 'бумага') {
                    alert(`НИЧЬЯ. У вас ${userChoice} и у компьютера ${compChoice}`);
                    break;
                } else {
                    alert('Ввели что-то не то')
                    break;
                }
            default:
                alert('Ошибочка вышла')
                break;
        }
    }
})