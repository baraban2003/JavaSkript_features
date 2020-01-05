window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //create modal window when click on Узнать больше

    //присваиваем переменным классы
    let more = document.querySelector(".more");
    let overlay = document.querySelector('.overlay');
    let close = document.querySelector('.popup-close');

    let moreDetales = document.querySelectorAll('.description-btn');

    //при нажатии на узнать больше открываем окно
    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash'); //это сранная анимация, еле допер
        // при нажатии на кнопку узнать больше 
        // замораживаем страницу чтобы ее нельзя было двигать 
        document.body.style.overflow = 'hidden';
    });

    //при нажатии на крестик закрываем окно
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        // размораживаем страницу при нажатии на крестик
        document.body.style.overflow = '';
    });


    this.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('description-btn')) {
            for (let i = 0; i < moreDetales.length; i++) {
                if (target == moreDetales[i]) {
                    overlay.style.display = 'block';
                    more.classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                    break;
                }
            }
        }
    });

});

// Второе задание - хрень, дл проекта ненужная ))

// let age = document.getElementById('age');

// function showUser(surname, name) {
// alert("Пользователь "+ surname + " " + name + ", его возраст " + this.value);
// }

// showUser.apply(age, ["Горький","Максим"]);