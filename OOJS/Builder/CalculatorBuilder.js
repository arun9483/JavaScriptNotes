/* this is builder for calculator*/
function CalculateBuilder(){
    this.calc = null;
}

CalculateBuilder.prototype.createCalculator = function(type){
    switch(type){
        case "binary":
            this.calc = new BinaryCalculator();
            console.log("binary calculator created");
            break;
        case "decimal":
            this.calc = new DecimalCalculator();
            console.log("decimal calculator created");
            break;
        default:
            console.log("this type of calculator does not exist currently");
            break;
            
    }
    //builder: created sub-modules of this.calc.
    if(this.calc){
        this.calc.setType();
        this.calc.setAdd();
        this.calc.setMultiply();
    }
}

CalculateBuilder.prototype.getCalculater = function(){
    return this.calc;
}


