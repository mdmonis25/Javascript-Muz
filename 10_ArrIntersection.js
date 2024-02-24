function ArrIntersection(arr1,arr2){
    let interArr = [];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])&& !interArr.includes[arr1[i]]){
            interArr.push(arr1[i])
        }
    }
    console.log(interArr);
}

ArrIntersection([1,2,3,5,6,9],[9,8,5,4,3,2])
