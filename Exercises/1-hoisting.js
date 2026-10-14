'use strict';

// Implementation #1
function incPrimitive(n) {
    return n + 1;
} 

const a = 5;
const b = incPrimitive(a);

console.dir({a, b}); 


// Implementation #2
function incReference(num) {
    return num.n += 1;
}

const obj = { n: 5 };

incReference(obj)

console.dir(obj)