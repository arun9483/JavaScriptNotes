var builder = new CalculateBuilder();
var director = new CalculatorProvider(builder);
var calc = director.getCalculator("decimal"); //calc is client

var a_decimal = 9, b_decimal = 5;
console.log("a_decimal: "+a_decimal);
console.log("b_decimal: "+b_decimal);

var result_decimal = calc.add(a_decimal, b_decimal);
console.log("add result_decimal: "+result_decimal);

result_decimal = calc.multiply(a_decimal, b_decimal);
console.log("multiply result_decimal: "+result_decimal);

var a_binary = a_decimal.toString(2);
var b_binary = b_decimal.toString(2);
console.log("a_binary: "+a_binary);
console.log("b_binary: "+b_binary);

//get binary calc
calc = director.getCalculator("binary");
var result_binary = calc.add(a_binary, b_binary);
console.log("add result_binary: "+result_binary);

result_binary = calc.multiply(a_binary, b_binary);
console.log("multiply result_binary: "+result_binary);
console.log("multiply result_binary converted into decimal: "+ parseInt( result_binary, 2 ) );