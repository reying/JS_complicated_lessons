'use strict';

let week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];
const nowDate = new Date();

week.forEach(function(item, i, array) {
    if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
        week[i] = week[i].italics();
    }
    if (i === nowDate.getDay()) {
        week[i] = week[i].bold();
    }
});

console.log(week.join('\r\n'));
// alert(week.join('\r\n'));

let elemHtml = document.querySelector('body');
elemHtml.innerHTML = week.join('<br>');