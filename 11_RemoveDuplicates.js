function RemoveDuplicates(arr){
    let uniqueArr = [];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
    console.log(uniqueArr)
}
RemoveDuplicates([1,2,3,"hello",3,2,"hello",5,true,false,true])