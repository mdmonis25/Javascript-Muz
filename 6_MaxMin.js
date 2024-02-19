function maxnum(arr){
    return Math.max(...arr);

}
console.log(maxnum([1,2,3,2,34]))

function minnum(arr){
    return Math.min(...arr);

}
console.log(minnum([1,2,3,2,34]))

function maxfor(arr){
    var max = 0;
    for(let i =0; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

console.log(maxfor([1,2,3,2,34]))