function CalculatorProvider(builder){ // this is director which provide calculator using builder
    this.builder = builder;
}

CalculatorProvider.prototype.setBuilder = function (builder){
    this.builder = builder;
}

CalculatorProvider.prototype.getCalculator = function (type){
    this.builder.createCalculator(type);
    return this.builder.getCalculater();
}