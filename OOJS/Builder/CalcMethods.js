var base2 = 2, base10 = 10;
function AddBinary(){
    function addBinary(a, b){
        var x = parseInt( a, base2 );	
        var y = parseInt( b, base2 );
        var sum = x + y;
        var result = sum.toString( base2);
        return result;
    }
    return addBinary;
}

function MultiplyBinary(){
    function multiplyBinary(a, b){
        var x = parseInt( a, base2 );	
        var y = parseInt( b, base2 );
        var product = x * y;
        var result = product.toString( base2);
        return result;
    }
    return multiplyBinary;
}

function AddDecimal(){
    function addDecimal(a, b){
        var sum = a + b;
        return sum;
    }
    return addDecimal;
}

function MultiplyDecimal(){
    function multiplyDecimal(a, b){
        var sum = a * b;
        return sum;
    }
    return multiplyDecimal;
}
