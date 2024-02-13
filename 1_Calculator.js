// function Calculator(num1,num2,operator){
//     let result;
//     switch(operator){
//         case "+":
//             result=num1+num2;
//             break;
//         case "-":
//             result=num1-num2;
//             break;
//         case "*":
//             result=num1*num2;
//             break;
//         case "/":
//             result=num1/num2;
//             break;
//         default:
//             console.log("Invalid Operator")    
//     }
//     return result;
// }

function Calculator(num1,num2,operator){
    let result;
    if(operator=="+"){
        result = num1+num2;
    }
    else if(operator=="-"){
        result= num1-num2;
    }
    else if(operator=="*"){
        result= num1*num2;
    }
    else if(operator=="/"){
        result= num1/num2;
    }
    else{
        console.log("Invalid Operator");  
    }
    return result;
}

console.log(Calculator(12,21,"*"))