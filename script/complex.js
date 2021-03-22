var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.module = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    };
    Complex.prototype.toString = function () {
        console.log('RE: ', this.real, ', IM: ', this.imaginary);
    };
    return Complex;
}());
var c1 = new Complex(3, 6);
console.log('c1:');
c1.toString();
var c2 = new Complex(4, 9);
console.log('c2:');
c2.toString();
console.log('suma c1 i c2');
var c3 = c1.add(c2);
c3.toString();
console.log('różnica wyniku sumy i c1');
var c4 = c3.subtract(c1);
c4.toString();
console.log('moduł dla wyniku różnicy: ', c4.module());
