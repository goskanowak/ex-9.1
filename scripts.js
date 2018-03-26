//var triangleArea1 = getTriangleArea(-5, 10),
//     triangleArea1 = getTriangleArea(2, -873),
//     triangleArea1 = getTriangleArea(55, 6);

//function getTriangleArea(a, h) {
//    if (a,h > 0 ){
//       alert('wynik dodatni');
//        
//    } else if (a,h < 0) {
//        alert('Incorrect value');
//    }
//}


function getTriangleArea(a, h) {
    if (a >= 0 && h >= 0) {
        return a*h/2;       
    } else {
      return "Nieprawidłowe dane";
    }   
}

var triangle1Area = getTriangleArea(1, 15);
var triangle2Area = getTriangleArea(10, -15);
var triangle3Area = getTriangleArea(18, 75);
console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);