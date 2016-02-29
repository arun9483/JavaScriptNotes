var ShoppingKart = (function(){
    
    var instance = null;
    function createInstance(productId, price){
        this.productlist = [];
        this.productlist[this.productlist.length] = [productId, price];
    }
        
   createInstance.prototype.addProduct = function (productId, price) {
        if(!instance){
            instance = new createInstance(productId, price);
        }else{
            if(productId != undefined && (price!=undefined && price>=0)){
               instance.productlist[instance.productlist.length] = [productId, price]; 
            }
        }
    }
    
    createInstance.prototype.showProductsInKart = function () {
        if(instance){
            var total = 0;
            for(var i=0;i<instance.productlist.length;i++){
                console.log("productID: "+instance.productlist[i][0] + " cost: "+instance.productlist[i][1]);
                total +=instance.productlist[i][1]; 
            }
            console.log("Total: "+total);
        }else{
             console.log("nothing is in kart");
        }
    }
    
    return {
        "getInstance": function (productId, price){
            if(!instance){
                instance = new createInstance(productId, price);    
            }else{
                instance.addProduct(productId, price);
            }
            return instance;
        }
    }
    
})();

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