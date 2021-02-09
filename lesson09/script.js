'use strict';

const upPer = function(value) {
    return value[0].toUpperCase() + value.substring(1);
};

const declensionWord = function(word, form1, form2, form3) {
    let n = Math.abs(word) % 100,
        n1 = n % 10;
    if (n > 10 && n < 20) { return form3; }
    if (n1 > 1 && n1 < 5) { return form2; }
    if (n1 === 1) { return form1; }
    return form3;
};

const nowDate = new Date();

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
    today.hour + declensionWord(today.hour, ' час ', ' часа ', ' часов ') +
    today.minute + declensionWord(today.minute, ' минута ', ' минуты ', ' минут ') +
    today.second + declensionWord(today.second, ' секунда', ' секунды', ' секунд');

let formatDateTow = nowDate.toLocaleDateString() + ' - ' + nowDate.toLocaleTimeString();

let elemOne = document.querySelector('.first_method');
let elemTow = document.querySelector('.second_method');
elemOne.innerHTML = formatDateOne;
elemTow.innerHTML = formatDateTow;