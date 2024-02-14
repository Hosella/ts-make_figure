enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

class Triangle implements Figure {
  shape: Shape = Shape.Triangle;
  getArea: () => number;

  constructor (
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.getArea = () => {
      const semiarea = (this.a + this.b + this.c) / 2;
      const area = Math.sqrt(semiarea * (semiarea - this.a) * (semiarea - this.b) * (semiarea - this.c));

      const arrSides = [this.a, this.b, this.c].sort((first, second) => second - first)
      if(this.a <= 0 || this.b <= 0 || this.c <= 0) {
        throw new Error("Length can't be less or equal zero");
      } else if (arrSides[0] >= arrSides[1] + arrSides[2]) {
        throw new Error("Sides 1, 2 and 3 can't form a triangle");
      }
      return Math.floor(area);
    };
  }
}

class Circle implements Figure {
  shape: Shape = Shape.Circle;
  getArea: () => number;

  constructor (
    public color: Color,
    private radius: number,
  ) {
    this.getArea = () => {
      if(this.radius <= 0) {
        throw new Error("Length can't be less or equal zero");
      } 
      return Math.floor( 2 * Math.PI * this.radius);
    }
  }
}

class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;
  getArea: () => number;

  constructor (
    public color: Color,
    private width: number,
    private height: number,
  ) {
    this.getArea = () => {
      if(this.width <= 0 || height <= 0) {
        throw new Error("Length can't be less or equal zero");
      } 
      return Math.floor(this.width * this.height);
  }
  }
}

function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

const a = new Triangle(Color.Red, 5, 2, 2)

console.log(getInfo(a))
