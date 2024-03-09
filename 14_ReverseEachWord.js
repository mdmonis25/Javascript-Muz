// function reverseEachWord(str){
//     let op = "";
//     str.split(" ").forEach(function(word){
//         op += (word.split("").reverse().join("")+" ");
//     })
//     console.log(op)

// }

function reverseEachWord(str){
    let op = str.split(" ").map(function(word){
        return word.split("").reverse().join("");
    })

    console.log(op.join(" "))

}

reverseEachWord("javascript muz is a cool playlist")