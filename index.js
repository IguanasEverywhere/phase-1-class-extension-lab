// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    let perim = 0;
    for (let side of this.sides) {
      perim += side;
    }
    return perim;
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = [...this.sides];
    if ((a + b) < c) {
      return false;
    } else if ((b + c) < a) {
      return false;
    } else if ((a + c) < b) {
      return false;
    } else {
      return true;
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let [a, b, c, d] = [...this.sides];
    if (a === b && b === c && c === d) {
      return true;
    } else {
      return false;
    }
  }

  get area() {
    return (this.perimeter / 4) * (this.perimeter / 4);
  }
}