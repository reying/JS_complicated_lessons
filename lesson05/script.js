// Задание 1
const arr = ['11', '22', '33', '44', '55', '66', '77'];

for (let i = 0; i < arr.length; i++) {
    let elemArr = arr[i].charAt(0);

    if (elemArr === '2' || elemArr === '4') {
        console.log(arr[i]);
    }
}

// Задание 2
nextHop:
    for (let i = 1; i < 101; i++) {
        const result = 'Делители этого числа: 1 и ' + i;
        if (i === 1) { continue nextHop; }
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                continue nextHop;
            }
        }
        console.log(result);
    }