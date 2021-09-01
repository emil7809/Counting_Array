"use strict";

const max = 10;
let iterator = 0;

loop();

function loop(){
    iterator++;

    if (iterator <= max) {
        console.log(iterator);
        setTimeout(loop, 300);
    }
}