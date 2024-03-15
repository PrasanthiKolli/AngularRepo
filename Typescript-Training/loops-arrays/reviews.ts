let reviews: number[] = [5, 4, 3, 2, 1];
let total: number = 0;
for (let i of reviews) {
    console.log(i);
    total += i;
}
console.log(total);
// for(let i=0;i<reviews.length;i++){
//     total += reviews[i];
// }

let avg = total / reviews.length;

console.log("Review average " + avg);