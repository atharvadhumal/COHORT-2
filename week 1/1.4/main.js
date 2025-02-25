// find the square of the input
function square(n) {
    return n * n
}
// finds cubbe of the input
function cube(n) {
    return n * n * n
}
// finds the sum of square of the inputs
function sumofSomething(a, b, callback) {
    const val1 = callback(a);
    const val2 = callback(b);

    return val1 + val2;

}
const ans = sumofSomething(2, 2, cube)
console.log(ans)