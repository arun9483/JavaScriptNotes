

function BinaryCalculator(){
    
}

BinaryCalculator.prototype = Object.create(Calculator.prototype);

BinaryCalculator.prototype.setType = function(){
    Calculator.prototype.setType.call(this, "binary");
}

BinaryCalculator.prototype.setAdd = function(){
    var add = new AddBinary();
    Calculator.prototype.setAdd.call(this, add);
}

BinaryCalculator.prototype.setMultiply = function(){
    var multiply = new MultiplyBinary();
    Calculator.prototype.setMultiply.call(this, multiply);
}