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

