// function LastNElements(arr,n){
//     let output = [];
//     for(let i =arr.length-n;i<arr.length;i++){
//         output.push(arr[i])
//     }
//     console.log(output)
// }

function LastNElements(arr,n){
    let output = arr.filter(function(elem){
        if(arr.indexOf(elem)>=(arr.length-n)){
            return elem;
        } 
    })
    console.log(output)
    
}



LastNElements([1,2,3,4,5,6,7,8],3)
