
let greet =(function () {

    let message = "hi dad";

    let getMessage =function(){

        return message;

    };

    });

console.log(greet.message);


let understand = (function() {

    var mahi="did not understand anything";

    var mahi ={

        place:"basanagarripalle",
        temple: "nagarpamma thalli",
        landmark:"entrance of village",
    
    }
    return mahi;

}) ();


console.log(understand.mahi);

console.log(understand.place);
console.log(understand.date);
console.log(understand.landmark);