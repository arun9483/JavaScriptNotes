/**
*  this file help us to understand, how to Class in javaScript
*/

(function () { //creating namespace
    
    function Human(name, gender){
        this.name = name; //property. access right public
        this.gender = gender; //property. access right public
    }
    
    Human.prototype.walk = function () { //method. access right public
        console.log(this.name + " is walking.");
    }
   
    var baby = new Human("arjun", "Male");
    baby.walk();
})();