var reviews = [5, 4, 3, 2, 1];
var total = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var i = reviews_1[_i];
    console.log(i);
    total += i;
}
console.log(total);
// for(let i=0;i<reviews.length;i++){
//     total += reviews[i];
// }
var avg = total / reviews.length;
console.log("Review average " + avg);
