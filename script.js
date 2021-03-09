document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const currency = document.querySelector('.currency'),
        currencyInput = document.querySelectorAll('input[type="radio"]'),
        input = document.getElementById('input'),
        labelInput = document.querySelector('label[for="input"]'),
        output = document.getElementById('output'),
        labelOutput = document.querySelector('label[for="output"]'),
        btn = document.getElementById('exchange'),
        vectorExchange = document.getElementById('vector-exchange');

    let currencyValue;

    const getData = (url, currencyValue) => {
        fetch(url)
            .then((response) => {
                if (response.status !== 200) {
                    output.value = 'Произошла ошибка';
                    throw new Error('status network not 200');
                }
                return (response.json());
            })
            .then((data) => {
                if (vectorExchange.value === 'rub') {
                    output.value = (Math.floor(+input.value * (1 / +data.rates[currencyValue]) * 100)) / 100;
                } else {
                    output.value = (Math.floor(+input.value * +data.rates[currencyValue] * 100)) / 100;
                }
            })
            .catch(error => console.log(error));
    };

    btn.addEventListener('click', () => {
        currencyInput.forEach(item => {
            if (item.checked === true) {
                currencyValue = item.value;
            }
        });

        getData('https://api.exchangeratesapi.io/latest?base=RUB&symbols=USD,EUR', currencyValue);
    });

    currency.addEventListener('change', (e) => {
        const target = e.target;
        if (target.tagName.toLowerCase() === 'input') {
            const checked = (mess) => {
                if (labelInput.textContent !== 'Российский Рубль (RUB)') {
                    labelInput.textContent = mess;
                } else {
                    labelOutput.textContent = mess;
                }
            };
            if (target.value === 'EUR') {
                checked('Евро (EUR)');
            } else if (target.value === 'USD') {
                checked('Доллар США (USD)');
            }
            output.value = 0;
        }
    });

    vectorExchange.addEventListener('change', () => {
        const value = labelInput.textContent;
        labelInput.textContent = labelOutput.textContent;
        labelOutput.textContent = value;
    });
});