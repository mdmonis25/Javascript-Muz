// function sumArr(arr){
//     let sum = 0;
//     arr.forEach(function(elem){
//         sum += elem;
//     })

//     console.log(sum)

// }

function sumArr(arr){
    let sum = arr.reduce(function(accumulator,currentValue){
        return accumulator += currentValue;
    });

    console.log(sum)

}
sumArr([2,3,4,1,6,5])