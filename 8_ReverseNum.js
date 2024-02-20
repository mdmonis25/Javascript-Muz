function reversenum(num){
    let rev=0;
    while(num>0){
        rev = rev*10 + num%10;
        console.log(rev)
        num = Math.floor(num/10);   
        console.log(num) 
    }
    return rev;

}

console.log(reversenum(1234))
