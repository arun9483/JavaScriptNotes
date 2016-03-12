/* Testing of Singleton class*/
var obj1 = ShoppingKart.getInstance("p01", 30);
var obj2 = ShoppingKart.getInstance("p02", 0);
obj2.addProduct("p3", 100);

obj1.showProductsInKart();
obj2.showProductsInKart();

if(obj1 === obj2){
    console.log("obj1 and obj2 are same object");
}else{
    console.log("obj1 and obj2 are different objects");
}