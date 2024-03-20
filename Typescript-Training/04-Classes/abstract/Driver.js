"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var c = new Circle_1.Circle(1, 2, 23);
var r = new Rectangle_1.Rectangle(1, 2, 23, 34);
// console.log(s.getInfo());
// console.log(c.getInfo());
// console.log(r.getInfo());
var shapes = [c, r];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var sh = shapes_1[_i];
    console.log(sh.claculateArea());
    console.log("--------------------------------------");
}
