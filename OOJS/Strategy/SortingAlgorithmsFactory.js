function sortingAlgorithmsFactory(){
    
}

sortingAlgorithmsFactory.prototype.createSortingAlgorthm = function (name){
    var object = null;
    switch (name) {
        case "insertion" :
            object = new InsertionSort();
            break;
        case "selection" :
            object = new SelectionSort();
            break;
        default:
            object = new InsertionSort();  
    }
    return  object;
}