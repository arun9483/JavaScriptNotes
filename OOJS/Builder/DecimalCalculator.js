function DecimalCalculator(){
}

DecimalCalculator.prototype = Object.create(Calculator.prototype);

DecimalCalculator.prototype.setType = function(){
    Calculator.prototype.setType.call(this, "decimal");
}

DecimalCalculator.prototype.setAdd = function(){
    var add = new AddDecimal();
    Calculator.prototype.setAdd.call(this, add);
}

DecimalCalculator.prototype.setMultiply = function(){
    var multiply = new MultiplyDecimal();
    Calculator.prototype.setMultiply.call(this, multiply);
}