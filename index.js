//Answer to question 1.

//Answer to question 2.

let languages = ["C#", "JavaScript", "Ruby", "PHP","Python"];
console.log(languages);
// I. Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
console.log(languages);
//II. Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
console.log(languages);
//III. Remove the first item in the array
languages.shift();
console.log(languages);
//IV. Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala","Swift");
console.log(languages);
//V. Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);
//Answer to question 3.

//Answer to question 4.
let arrValues = []

function maxValue(...arrValues){
    // let a = 0; b = 0;
    sortedArr = arrValues.sort(function(valueOne, valueTwo){return valueOne - valueTwo})
    // console.log(sortedArr);
    return(`Maximum value is ${sortedArr[sortedArr.length - 1]}`);
}

console.log(maxValue(44, 23,1000, 90, 100, 40, 67, 100, 82, 1, 20));

//Answer to question 5.
let valuesOfVTI = [];

function valTimesIndex(...valuesOfVTI){
    let result = 0; let resultOfVIT = ""; let i = 0;

    for(; i < (valuesOfVTI.length - 1); i++){
        result = valuesOfVTI[i] * i;
        resultOfVIT += result + ", "
    }
    return(resultOfVIT += valuesOfVTI[i] * i);
}

console.log(valTimesIndex(1,2,3,4,5,6,7,8,9,10, 100, 44, 999));
