function VowCon(str){
    str = str.toLowerCase();
    console.log(str)
    for(let i =0;i<str.length;i++){
        if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
            console.log(str[i]);
        }
    }
    for(let i =0;i<str.length;i++){
        if(!(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u")){
            console.log(str[i]);
        }
    }
}

VowCon("JamnipAli")