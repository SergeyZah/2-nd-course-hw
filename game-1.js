document.getElementById('playGame1').addEventListener('click', function () {

    const predictedNumber = Math.floor(Math.random() * 100) + 1;
    userNumber = 0;
    while (userNumber !== predictedNumber) {

        const userNumber = Number(prompt('Попробуй угадать число от 1 до 100'));

        if (userNumber < 0 || userNumber === 0 || userNumber > 100) {
            alert('От 1 до 100, соберись!');
            break;
        } else if (userNumber === predictedNumber) {
            alert(`Супер! Молодец! Загаданное число: ${predictedNumber}.`);
            break
        } else if (userNumber < predictedNumber) {
            alert('Загаданное число больше, думай дальше)');
        } else if (userNumber > predictedNumber) {
            alert('Загаданное число меньше, думай дальше)');
        } else {
            alert('Ввели что-то не то');
            break;
        }
    }
})
