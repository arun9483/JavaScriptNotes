/*Insertion sort algorithms code*/
function InsertionSort(){  
    function insertionSort(arr, isInPlace){
        var myarr;
        
        if(isInPlace){
            myarr = arr;
        }else{
            myarr = arr.slice(0, arr.length);
        }
        var i, j, length, key;
        length = myarr.length;

        for(i=1;i<length;i++){
            key = myarr[i];
            j = i-1;
            while(j>=0){
                if(key<myarr[j]){
                    myarr[j+1] = myarr[j];
                    j--;
                }else{
                    break;
                }   
            }
            myarr[j+1] = key;
        }
        return myarr;
    }
    return insertionSort;
}

