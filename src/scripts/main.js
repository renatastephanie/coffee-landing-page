// main.js

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('cta-button');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Obrigado por se interessar pelo nosso café!';
        message.style.color = 'green';
    });
});