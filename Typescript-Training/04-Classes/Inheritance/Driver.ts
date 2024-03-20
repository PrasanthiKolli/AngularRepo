import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let s:Shape = new Shape(10,20);
let c:Shape = new Circle(1,2,23);
let r:Shape = new Rectangle(1,2,23,34);

console.log(s.getInfo());
console.log(c.getInfo());
console.log(r.getInfo());

