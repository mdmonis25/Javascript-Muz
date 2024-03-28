// function FirstNElements(arr,n){
//     let output = [];
//     for(let i =0;i<n;i++){
//         output.push(arr[i])
//     }
//     console.log(output)
// }

function FirstNElements(arr,n){
    if(n>arr.length){
        console.log("itne elements nahi hai array me");
        return 0;
    }
    let output = arr.filter(function(elem){
        if(arr.indexOf(elem)<n) return elem;
    });
    console.log(output)
    
}

FirstNElements([1,2,3,4,5,6,7,8],9)
