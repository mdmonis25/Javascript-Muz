function missingNumber(arr){
    let n = arr.length +1;
    let sum = n*(n+1)/2;
    let actualSum = 0;
    for(let i =0;i<arr.length;i++){
        actualSum += arr[i];
    }

    return sum - actualSum;
}

console.log(missingNumber([1,2,3,4,6,7]))
console.log(missingNumber([8,7,6,5,4,3,2,1]))
console.log(missingNumber([8,7,6,5,4,3,2]))