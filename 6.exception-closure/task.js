// ## Задача №1. Форматтер чисел
function parseCount(someValue) {
    let parse = Number.parseInt(someValue);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    } else { 
        return parse;
    }
}
function validateCount(someValue) {
    try {
        let parse = parseCount(someValue);
        return parse;
    } catch (error) {
        return error;
    }
}
// ## Задача №2. Треугольник 
class Triangle  {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        } else {
            this.a = a;
            this.b = b;
            this.c = c;
        }
    }
    getPerimeter() {
        let perimetr = (this.a + this.b + this.c);
        return perimetr;
    }
    getArea () {
        let perimetr = this.getPerimeter() / 2;
        let area = Math.sqrt(perimetr * (perimetr - this.a) * (perimetr - this.b) * (perimetr - this.c));
        this.area = area.toFixed(3);
        return Math.abs(this.area);
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
        getArea: () => "Ошибка! Треугольник не существует",
        getPerimeter: () => "Ошибка! Треугольник не существует",
        };
    }
}