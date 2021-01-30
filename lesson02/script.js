let num = 266219;
let composition = 1;
let degreeNum;

let arrayNum = num.toString().split(''); // Преобразование числа в массив цифр

for (let i = 0; i < arrayNum.length; i++) { // Произведение цифр числа
    composition *= arrayNum[i];
}
console.log('Произведение цифр числа =', composition);

degreeNum = composition ** 3; // Возведение в степень
console.log('Первые две цифры полученного числа:', +degreeNum.toString().substr(0, 2));