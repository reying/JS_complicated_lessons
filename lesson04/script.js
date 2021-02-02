let text = '       Очень-преочень длинная строка с текстом      ';

let formattedString = function(data) {
    if (typeof(data) !== 'string') {
        return 'Полученные данные не являются строкой';
    }
    let str = data.trim();
    if (str.length > 30) {
        str = str.substring(0, 30) + '...';
    }
    return 'Результат: ' + str;
};

console.log(formattedString(text));