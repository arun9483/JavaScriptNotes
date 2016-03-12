/*Selection sort algorithms code*/
function SelectionSort(){  
    function SelectionSort(arr, isInPlace){
        var myarr;
        
        if(isInPlace){
            myarr = arr;
        }else{
            myarr = arr.slice(0, arr.length);
        }
        var i, j, length, index, temp;
        length = myarr.length;

        for(i=0;i<length;i++){
            index = 0;
            for(j=1;j<length-i;j++){
                if(myarr[index]<myarr[j]){
                    index = j;
                }
            }
            if(index != (length-i-1)){
               temp = myarr[index];
               myarr[index] = myarr[length-i-1]; 
               myarr[length-i-1] = temp;
            }
        }
        return myarr;
    }
    return SelectionSort;
}
