"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    subtract(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    module() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        console.log('RE: ', this.real, ', IM: ', this.imaginary);
    }
}
let c1 = new Complex(3, 6);
console.log('c1:');
c1.toString();
let c2 = new Complex(4, 9);
console.log('c2:');
c2.toString();
console.log('suma c1 i c2');
let c3 = c1.add(c2);
c3.toString();
console.log('różnica wyniku sumy i c1');
let c4 = c3.subtract(c1);
c4.toString();
console.log('moduł dla wyniku różnicy: ', c4.module());
