const arguments = process.argv.slice(1);
const findCircumference = require("./modules/circleCircumference");
const findArea =require("./modules/circleArea");

let area = findArea(arguments[1]);
let circumference = findCircumference(arguments[1]);

console.log(`Area is: ${area} and Circumference is: ${circumference}`);
