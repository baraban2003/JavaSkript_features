window.addEventListener('DOMContentLoaded', function () {
    'use strict';
//timer
    //set up data of compaine 
    let deadLine = '2020-01-31';
    //вычисляем разницу между датой акции и сегодняшней для разработки таймера
    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
        
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    //переменные готовы, осталось поместить на странице
    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);


        function updateClock() {
            let t = getTimeRemaining(endTime);

            function addZero(num) {
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadLine);
});