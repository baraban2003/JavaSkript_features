let menu = document.getElementsByClassName('menu')[0];
let but = document.getElementsByClassName('menu-item');
let title = document.getElementById('title');
let adv = document.getElementsByClassName('adv')[0];
let askUser = document.querySelector('#prompt');

menu.insertBefore(but[2], but[1]); // Поменяли местами два элемента

let but5 = document.createElement('li'); // Добавляем новый li, с классом и текстом
but5.classList.add('menu-item');
but5.textContent = "Fifth element";
menu.appendChild(but5);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон

title.textContent ="Мы продаем только подлинную технику Apple"; // Заменить текст

adv.remove(); // Удалить рекламу со страницы

let ask = prompt("Ваше отношение к технике Apple?"); // Отношение к технике Apple
askUser.textContent = ask;
askUser.style.height = '100px';
askUser.style.color = '#00FF00';