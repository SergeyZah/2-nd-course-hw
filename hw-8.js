// Задание 1

const titleEl = document.querySelector(".heading");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('click', () => {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block';
    } else {
        titleEl.style.display = 'none';
    }
});

// Задание 2

const btnColorEl = document.querySelector('.btn-Color');
const textColorEl = document.querySelector('.text-Color');

btnColorEl.addEventListener('click', () => {
    if (textColorEl.style.color === 'black') {
        textColorEl.style.color = 'red';
    } else {
        textColorEl.style.color = 'black';
    }
});


// Задание 3

const btnTextEl = document.querySelector('.btn-Text');
const headingTextEl = document.querySelector('.heading-Text');

btnTextEl.addEventListener('click', () => {
    headingTextEl.textContent = 'Привет, мир!';
});


// Задание 4

const allDescription = document.querySelectorAll('.description');

allDescription.forEach(description => {
    description.textContent = 'Изменённый текст';
});


// Задание 5

const allDescription5 = document.querySelectorAll('.description5');
const allRandomText = document.querySelectorAll('.random-Text');

allDescription5.forEach(description => {
    description.textContent = 'Новый текст';
});


// Задание 6

const btnNewTextEl = document.querySelector('.btn-New-Text');
const contentEl = document.querySelector('.content');

btnNewTextEl.addEventListener('click', () => {
    const paragraphEl = document.createElement('p');
    paragraphEl.textContent = 'Новый абзац';
    paragraphEl.classList.add('paragraph');
    contentEl.appendChild(paragraphEl);
});


// Задание 7

const btnDeletTextEl = document.querySelector('.btn-Delet-Text');
const otherTextEl = document.querySelector('.other-Text');

btnDeletTextEl.addEventListener('click', () => {
    const descriptionEl = document.querySelector('.Description');
    descriptionEl.remove();
});