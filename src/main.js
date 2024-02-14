"use strict";
var Shape;
(function (Shape) {
    Shape["Triangle"] = "triangle";
    Shape["Circle"] = "circle";
    Shape["Rectangle"] = "rectangle";
})(Shape || (Shape = {}));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
class Triangle {
    constructor(color, a, b, c) {
        this.color = color;
        this.a = a;
        this.b = b;
        this.c = c;
        this.shape = Shape.Triangle;
        this.getArea = () => {
            const semiarea = (this.a + this.b + this.c) / 2;
            const area = Math.sqrt(semiarea * (semiarea - this.a) * (semiarea - this.b) * (semiarea - this.c));
            const arrSides = [this.a, this.b, this.c].sort((first, second) => second - first);
            if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
                throw new Error("Length can't be less or equal zero");
            }
            else if (arrSides[0] >= arrSides[1] + arrSides[2]) {
                throw new Error("Sides 1, 2 and 3 can't form a triangle");
            }
            return Math.floor(area);
        };
    }
}
class Circle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
        this.shape = Shape.Circle;
        this.getArea = () => {
            if (this.radius <= 0) {
                throw new Error("Length can't be less or equal zero");
            }
            return Math.floor(2 * Math.PI * this.radius);
        };
    }
}
class Rectangle {
    constructor(color, width, height) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.shape = Shape.Rectangle;
        this.getArea = () => {
            if (this.width <= 0 || height <= 0) {
                throw new Error("Length can't be less or equal zero");
            }
            return Math.floor(this.width * this.height);
        };
    }
}
function getInfo(figure) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
const a = new Triangle(Color.Red, 5, 2, 2);
console.log(getInfo(a));
