// Задание 1

const titleEl = document.querySelector(".heading");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('click', () => {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block';
    } else {
        titleEl.style.display = 'none';
    }
})

// Задание 2

const btnColorEl = document.querySelector('.btnColor');
const textColorEl = document.querySelector('.textColor');

btnColorEl.addEventListener('click', () => {
    if (textColorEl.style.color === 'black') {
        textColorEl.style.color = 'red';
    } else {
        textColorEl.style.color = 'black';
    }
})