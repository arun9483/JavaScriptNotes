console.log("****Strategy design pattern tester***");

//create factory object
var factoryObject = new sortingAlgorithmsFactory();

var arr1 = [32, 10, 41, 5, 27, 24, 31, 2];

//use factory to create sorting algorithm - insertion
var sortingAlgo = factoryObject.createSortingAlgorthm("insertion");

//create container
var myContainer = new Contaioner(arr1, sortingAlgo);

//sort arr1 without modifing original array
var sortedArr1 = myContainer.sort(false);
myContainer.printArray();
console.log(sortedArr1);

//sort arr1 in-place 
var sortedArr2 = myContainer.sort(true);
myContainer.printArray();
console.log(sortedArr2);


//change arr and sorting algorithm
arr1 = [32, 10, 41, 5, 27, 24, 31, 2];
myContainer.setArray(arr1);

//use factory to create sorting algorithm - selection
sortingAlgo = factoryObject.createSortingAlgorthm("selection");

//Change strategy(sorting algorithm) from insertion to selection
myContainer.setSortingAlgorithms(sortingAlgo);
console.log("strategy changed");

sortedArr1 = myContainer.sort(false);
myContainer.printArray();
console.log(sortedArr1);

//sort arr in-place 
sortedArr2 = myContainer.sort(true);
myContainer.printArray();
console.log(sortedArr2);
