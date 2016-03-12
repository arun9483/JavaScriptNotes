/**
*  this file help us to understand, how to create object in javaScript
*/
(function () { //creating namespace
    
    var obj_literal = { }; //object created using object litral
    
    var obj_cons = new Object(); // object created using Object constructor
    
    
    //asign properties to abobe objects
    obj_literal.literalProp = "value_literal";
    obj_literal.consProp = "value_cons";
    
    //log assigned properties
    console.log(obj_literal.literalProp);
    console.log(obj_literal.consProp);
   
})();