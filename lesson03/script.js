let lang = 'ru';
let daysEn = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
let daysRu = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];
let resultForIf;
let resultForSwitch;
let arrDays = new Map([
    ['ru', daysRu],
    ['en', daysEn],
    ['', 'ОШИБКА: Язык не определен']
]);
let namePerson = 'Дмитрий';
let positionPerson = namePerson === 'Артем' ? 'диретор' : namePerson === 'Максим' ? 'преподаватель' : 'студент';



// Через if
if (lang === 'ru') {
    resultForIf = daysRu;
} else if (lang === 'en') {
    resultForIf = daysEn;
} else {
    resultForIf = 'ОШИБКА: Язык не определен';
}

// Через switch-case
switch (lang) {
    case 'ru':
        resultForSwitch = daysRu;
        break;
    case 'en':
        resultForSwitch = daysEn;
        break;
    default:
        resultForSwitch = 'ОШИБКА: Язык не определен';
}



// Вывод результата решения через if для задачи 1
console.log(resultForIf);
// Вывод результата решения через switch для задачи 1
console.log(resultForSwitch);
// Вывод результата решения через многомерный массив для задачи 1
console.log(arrDays.get(lang));

// Вывод результат решения на определение должности для задачи 2
console.log(namePerson, ' - ', positionPerson);