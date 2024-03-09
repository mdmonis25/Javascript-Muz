function capitalStr(str){
    let output = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    console.log(output.join(" "))

}
capitalStr("i love kaju katli")

