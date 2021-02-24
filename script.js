'use strict';

const inputTxt = document.querySelector('.inputTxt'),
    outputTxt = document.querySelector('.outputTxt');

function debounce(f, t) {
    return function(args) {
        let previousCall = this.lastCall;
        this.lastCall = Date.now();
        if (previousCall && ((this.lastCall  -  previousCall) <= t)) {
            clearTimeout(this.lastCallTimer);
        }
        this.lastCallTimer = setTimeout(() => f(args), t);
    };
}

const outputtingText = function() {
    outputTxt.textContent = inputTxt.value;
};

inputTxt.addEventListener('keyup', debounce(outputtingText, 300));