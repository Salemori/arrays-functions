//Answer to question 1.
/**
 * Mutating array methods after been used changes the original array it operates on instead 
 * of returning a new array with the new changes, while non-mutating array methods do not change the
 * array after the method has been used.
 * 
 * Examples of Mutating methods in JavaScript:
 * i. pop()
 * ii. push()
 * iii. reverse()
 * iv. shift()
 * v. sort()
 * 
 * Examples of Non-mutating methods in JavaScript:
 * i. includes() 
 * ii. join()
 * iii. lastIndexOf
 * iv. slice() 
 * v. toString() 
 */

//Answer to question 2.
let languages = ["C#", "JavaScript", "Ruby", "PHP","Python"];
console.log(languages);

// 2 i. Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
console.log(languages);

//2 ii. Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
console.log(languages);

//2 iii. Remove the first item in the array
languages.shift();
console.log(languages);

//2 iv. Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala","Swift");
console.log(languages);

//2 v. Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);

//Answer to question 3.
let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit){
    fruit[2] = "orange";
    return fruit;
}
console.log(changeFruit([]));
/* The value of fruit after calling the function changeFruit is:
--> [ <2 empty items>, 'orange' ] <--*/

//Answer to question 4.
let arrValues = []
function maxValue(...arrValues){
    sortedArr = arrValues.sort(function(valueOne, valueTwo){return valueOne - valueTwo})
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
