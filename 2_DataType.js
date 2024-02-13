// function DataType(elem){
//     return typeof elem;
// }

// console.log(DataType(12))
// console.log(DataType("monis"))
// console.log(DataType({}))
// console.log(DataType([]))
// console.log(DataType(function(){}))

function isArr(arr){
    return Array.isArray(arr);
}

console.log(isArr({}))