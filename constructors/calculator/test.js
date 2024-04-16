// Создайте функцию - конструктор Calculator, которая создаёт объекты с тремя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

// Например:
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

function Calculator() {
    this.read = function () {
        this.a = +prompt('Число 1:');
        this.b = +prompt('Число 2:');
    }
    this.sum = function(){
        this.sum = this.a + this.b;
    }
    this.mul = function () {
        this.mul = this.a * this.b;
    }
}

let calc = new Calculator();
calc.read();
calc.sum();
calc.mul();
console.log(calc);