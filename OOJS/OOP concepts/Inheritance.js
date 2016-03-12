/**
*  this file help us to understand, how to how to implement inheritance in javaScript
*/

(function (){
    
    /*parent class*/
    function Animal(name) { 
        this.name = name;
    }
    
    Animal.prototype.getName = function () {
        return this.name;
    };

    Animal.prototype.setName = function (name) {
        this.name = name;
    };

    Animal.prototype.move = function () {
        console.log(this.getName() + " is Moving.");
    };
    
    
    /*child class*/
    function Bird(name, featherLength) {
        this.featherLength = featherLength;
        Animal.call(this, name);
    }

    Bird.prototype = Object.create(Animal.prototype);
    Bird.prototype.constructor = Bird;

    Bird.prototype.getFeatherLength = function () {
        return this.featherLength;
    };

    Bird.prototype.setFeatherLength = function (featherLength) {
        this.featherLength = featherLength;
    };

    Bird.prototype.twitter = function () {
        console.log(this.getName() + " is Twittering.");
    };

    Bird.prototype.move = function () {
        console.log(this.getName() + " is Flying.");
    };
    
    
    /*test parent and child class*/    
    var animal_obj1 = new Animal("animal_obj");
    
    console.log (animal_obj1.getName());
    animal_obj1.move();
    animal_obj1.setName("animal_obj1");
    console.log (animal_obj1.getName());
    animal_obj1.move();
    
    var sparrow = new Bird("sparrow", 2);
    sparrow.getName();
    sparrow.twitter();
    sparrow.move();
    console.log( sparrow.getName() + " has "+ sparrow.getFeatherLength() + " inches feather");
   
 
})();
