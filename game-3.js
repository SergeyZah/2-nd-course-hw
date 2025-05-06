document.getElementById('playGame3').addEventListener('click', function () {

    const userText = prompt('Введи любое слово и мы вмиг его перевернём');

    if (userText) {
        alert(`Получилось: ${userText.split('').reverse().join("")}`);
    } else if (userText === null) {
        alert('До новых встреч)');
    } else if (userText === '') {
        alert("Нет букв(");
    }
})