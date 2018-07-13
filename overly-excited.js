// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
var symbol = "?";

function addExcitement (theWordArray, symbol) {
    let buildMeUp = ""
    var j = 1;
    for (let i = 0; i < theWordArray.length; i++) {
        if ((i + 1) % 3 === 0) {
        
            buildMeUp = buildMeUp + " " + theWordArray[i] + symbol.repeat(j);
            console.log(buildMeUp);
            j = j + 1;
        }
        else {
        buildMeUp = buildMeUp + " " + theWordArray[i];
        console.log(buildMeUp);
        }
    
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?");