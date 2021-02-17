'use strict';

const DomElement = function(selector, options) {
    this.selector = selector;
    options = options || {};
    this.height = options.height;
    this.width = options.width;
    this.bg = options.bg;
    this.fontSize = options.fontSize;
    this.text = options.text;
    this.position = options.position;
};

DomElement.prototype.createElem = function() {
    let element = document.createElement('div');

    if (this.selector[0] === '.') {
        let str = this.selector;
        element.className = str.replace('.', '');
    }
    if (this.selector[0] === '#') {
        let str = this.selector;
        element.id = str.replace('#', '');
    }

    element.style.cssText = 'height: ' + this.height + ';' +
        'width: ' + this.width + ';' +
        'background: ' + this.bg + ';' +
        'font-size: ' + this.fontSize + ';' +
        'position: ' + this.position + ';';
    element.textContent = this.text;
    document.querySelector('body').appendChild(element);
};

// DomElement.prototype.movingElem = function(event) {
//     let 
//     if (event.code === 'KeyUp') {}
// };


let square = new DomElement('#square', {
    height: '100px',
    width: '100px',
    bg: 'black',
    position: 'absolute'
});

document.addEventListener('DOMContentLoaded', square.createElem());
document.addEventListener('keydown', function(event) {
    let elem = document.querySelector(square.selector);
    if (event.code === 'KeyW') {
        let top = (elem.style.top) ? parseFloat(elem.style.top) : 0;
        elem.style.top = top - 10 + 'px';
    }
    if (event.code === 'KeyS') {
        let down = (elem.style.top) ? parseFloat(elem.style.top) : 0;
        elem.style.top = down + 10 + 'px';
    }
    if (event.code === 'KeyA') {
        let left = (elem.style.left) ? parseFloat(elem.style.left) : 0;
        elem.style.left = left - 10 + 'px';
    }
    if (event.code === 'KeyD') {
        let right = (elem.style.left) ? parseFloat(elem.style.left) : 0;
        elem.style.left = right + 10 + 'px';
    }
});