"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Shape_1 = require("./Shape");
var s = new Shape_1.Shape(10, 20);
var c = new Circle_1.Circle(1, 2, 23);
var r = new Rectangle_1.Rectangle(1, 2, 23, 34);
// console.log(s.getInfo());
// console.log(c.getInfo());
// console.log(r.getInfo());
var shapes = [s, c, r];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var sh = shapes_1[_i];
    console.log(sh.getInfo());
    console.log("--------------------------------------");
}
