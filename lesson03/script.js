let lang = 'ru';
let daysEn = ['Days of the week:',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let daysRu = ['Дни недели:',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];
let arrDays = [
    ['ru', daysRu],
    ['en', daysEn],
    ['', 'ОШИБКА: Язык не определен']
];



// Через if
if (lang === 'ru') {
    console.log(daysRu.toString().replaceAll(',', ', ').replace(':,', ':'));
} else if (lang === 'en') {
    console.log(daysEn.toString().replaceAll(',', ', ').replace(':,', ':'));
} else {
    console.log('ОШИБКА: Язык не определен');
}

// Через switch-case
switch (lang) {
    case 'ru':
        console.log(daysRu.toString().replaceAll(',', ', ').replace(':,', ':'));
        break;
    case 'en':
        console.log(daysEn.toString().replaceAll(',', ', ').replace(':,', ':'));
        break;
    default:
        console.log('ОШИБКА: Язык не определен');
}

// Через многомерный массив
for (let i = 0; lang === arrDays[i][0]; i++) {
    console.log(arrDays[i][1].toString().replaceAll(',', ', ').replace(':,', ':'));
}
for (let i = 1; lang === arrDays[i][0]; i++) {
    console.log(arrDays[i][1].toString().replaceAll(',', ', ').replace(':,', ':'));
}
for (let i = 2; lang === arrDays[i][0];) {
    console.log(arrDays[i][1]);
    break;
}

// Еще способ
while (lang === 'ru') {
    console.log(arrDays[0][1].toString().replaceAll(',', ', ').replace(':,', ':'));
    break;
}
while (lang === 'en') {
    console.log(arrDays[1][1].toString().replaceAll(',', ', ').replace(':,', ':'));
    break;
}
while (lang !== 'ru' & lang !== 'en') {
    console.log('ОШИБКА: Язык не определен');
    break;
}