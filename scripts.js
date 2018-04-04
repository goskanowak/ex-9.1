var triangle1Area = getTriangleArea(1, 15);
var triangle2Area = getTriangleArea(10, -15);
var triangle3Area = getTriangleArea(18, 75);

function getTriangleArea(a, h) {
    if (a >= 0 && h >= 0) {
        return a * h / 2;       
    } return "Incorrect value";   
}

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);
