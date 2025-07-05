/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const ints = new Map();
    
    for(i=0;i<arr.length;i++){
        if(ints.has(arr[i])){            
            ints.set(arr[i], ints.get(arr[i])+1 )
        } else {
            ints.set(arr[i],1)
        }
    }

    let luckyNumbers = [];
    for([number,count] of ints){
        if(number == count){
            luckyNumbers.push(+number);
        }
    }

    if(luckyNumbers.length>0){
        const sortedLN = luckyNumbers.sort((a,b)=>a-b);
        return sortedLN[sortedLN.length-1];
    }

    return -1;
};

console.log(findLucky([5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4]));