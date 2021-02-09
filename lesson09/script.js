'use strict';

// week.forEach(function(item, i, array) {
//     if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
//         week[i] = week[i].italics();
//     }
//     if (i === nowDate.getDay() - 1) {
//         week[i] = week[i].bold();
//     }
// });

// console.log(week.join('\r\n'));
// alert(week.join('\r\n'));

// let elemHtml = document.querySelector('body');
// elemHtml.innerHTML = week.join('<br>');

const nowDate = new Date();

const upPer = function(value) {
    return value[0].toUpperCase() + value.substring(1);
};

// Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды
let today = {
    second: nowDate.getSeconds(),
    minute: nowDate.getMinutes(),
    hour: nowDate.getHours(),
    weekDay: nowDate.toLocaleString('ru', { weekday: 'long' }),
    dayAndMonth: nowDate.toLocaleString('ru', { month: 'long', day: 'numeric' }),
    year: nowDate.getFullYear()
};


let formatDateOne = 'Сегодня ' + upPer(today.weekDay) + ', ' +
    today.dayAndMonth + ' ' + today.year + ' года, ' +
    today.hour + ' часов ' + today.minute + ' минуты ' + today.second + ' секунд';
console.log(formatDateOne);

let formatDateTow = nowDate.toLocaleDateString() + ' - ' + nowDate.toLocaleTimeString();
console.log(formatDateTow);

let elemOne = document.querySelector('.first_method');
let elemTow = document.querySelector('.second_method');
elemOne.innerHTML = formatDateOne;
elemTow.innerHTML = formatDateTow;