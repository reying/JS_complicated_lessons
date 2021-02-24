'use strict';

const ball = document.querySelector('.ball'),
    btnStart = document.querySelector('#start'),
    btsReset = document.querySelector('#reset');
let count = 0,
    executionStatus = false,
    startStatus = false,
    idIntervalFaying,
    idIntervalDropping;

const start = function() {
    const droppingBall = function() {
        idIntervalDropping = requestAnimationFrame(droppingBall);
        if (count < 794) {
            count += 8;
            ball.style.top = count + 'px';
        } else {
            cancelAnimationFrame(idIntervalDropping);
            flyingBall();
            executionStatus = true;
        }
    };

    const flyingBall = function() {
        idIntervalFaying = requestAnimationFrame(flyingBall);
        if (count > 100) {
            count -= 8;
            ball.style.top = count + 'px';
        } else {
            cancelAnimationFrame(idIntervalFaying);
            droppingBall();
            executionStatus = false;
        }
    };
    if (!startStatus) {
        if (!executionStatus) {
            droppingBall();
        } else {
            flyingBall();
        }
        startStatus = true;
    } else {
        cancelAnimationFrame(idIntervalDropping);
        cancelAnimationFrame(idIntervalFaying);
        startStatus = false;
    }
};

const reset = function() {
    cancelAnimationFrame(idIntervalDropping);
    cancelAnimationFrame(idIntervalFaying);
    count = 0;
    ball.style.top = count + 'px';
    startStatus = false;
};

btnStart.addEventListener('click', start);
btsReset.addEventListener('click', reset);