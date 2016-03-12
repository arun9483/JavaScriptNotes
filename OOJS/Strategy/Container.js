function Contaioner(arr, sortingAlgo){
    this.arr = arr;
    this.sortingAlgo = sortingAlgo;
}

Contaioner.prototype.setSortingAlgorithms = function (algo) {
    this.sortingAlgo = algo;
}

Contaioner.prototype.setArray = function (arr){
    this.arr = arr;
}

Contaioner.prototype.sort = function (isInplace) {
    var temp;
    temp = this.sortingAlgo(this.arr, isInplace);
    return temp;
}

Contaioner.prototype.printArray = function () {
    console.log(this.arr);
}
