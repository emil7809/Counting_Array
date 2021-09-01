"use strict";

// const max = 10;
// let iterator = 0;

// loop();

// function loop(){
//     iterator++;

//     if (iterator <= max) {
//         console.log(iterator);
//         setTimeout(loop, 300);
//     }
// }

const count = ['1','2','3','4','5','6','7','8','9','10'];
let newarr = count[0];

loop();

function loop() {
    newarr++;
    console.log(newarr);
    setTimeout(loop, 500);
}