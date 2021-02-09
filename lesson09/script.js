'use strict';

const upPer = function(value) {
    return value[0].toUpperCase() + value.substring(1);
};

const declensionWord = function(word, form1, form2, form3) {
    const n = Math.abs(word) % 100,
        n1 = n % 10;
    if (n > 10 && n < 20) { return form3; }
    if (n1 > 1 && n1 < 5) { return form2; }
    if (n1 === 1) { return form1; }
    return form3;
};

// Функция для второго способа вывода второго формата
const addNull = function(str) {
    if (str.toString().length < 2) {
        return '0' + str.toString();
    } else {
        return str;
    }
};

const displayingNowDate = function() {
    const nowDate = new Date();

    const today = {
        second: nowDate.getSeconds(),
        minute: nowDate.getMinutes(),
        hour: nowDate.getHours(),
        weekDay: nowDate.toLocaleString('ru', { weekday: 'long' }),
        day: nowDate.getDay(),
        month: nowDate.getMonth(),
        dayAndMonth: nowDate.toLocaleString('ru', { month: 'long', day: 'numeric' }),
        year: nowDate.getFullYear()
    };

    const formatDateOne = 'Сегодня ' + upPer(today.weekDay) + ', ' +
        today.dayAndMonth + ' ' + today.year + ' года, ' +
        today.hour + declensionWord(today.hour, ' час ', ' часа ', ' часов ') +
        today.minute + declensionWord(today.minute, ' минута ', ' минуты ', ' минут ') +
        today.second + declensionWord(today.second, ' секунда', ' секунды', ' секунд');

    // Первый способ вывода второго формата
    const formatDateTow = nowDate.toLocaleDateString() + ' - ' + nowDate.toLocaleTimeString();

    // Второй способ вывода второго формата
    // const formatDateTow = addNull(today.day) + '.' + addNull(today.month) + '.' + addNull(today.year) + ' - ' +
    //     addNull(today.hour) + ':' + addNull(today.minute) + ':' + addNull(today.second);


    const elemOne = document.querySelector('.first_method');
    const elemTow = document.querySelector('.second_method');
    elemOne.innerHTML = formatDateOne;
    elemTow.innerHTML = formatDateTow;
};
displayingNowDate();

const rel = function() {
    window.location.reload();
};
setInterval(rel, 1000);