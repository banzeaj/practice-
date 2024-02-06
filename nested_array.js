// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

const removeDupes = function(arr){
    let newArr = [];
    for(let i =0; i<arr.length; i++){
        let element = arr[i]
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    }

    return newArr;
}

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]

//////////////////////////////////////////////////////////////////////////

console.log("--------------------------------------------------------------")

// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.
const removeFirstVowel = function(str){
    let vowels = 'aeiou';
    for(let i =0; i < str.length; i++){
        let char = str[i] // v

        if(vowels.includes(char)){
            let first = str.slice(0, i)
            let second = str.slice(i+1)

            return first+second;
        }
    }
}
console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'

//////////////////////////////////////////////////////////////////////////
console.log("----------------------------------------------------------")

// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.
const removeVowels = function(str){
    let newStr = '';
    let vowels = 'aeiou';
    for(let i =0; i <str.length; i++){
        let char = str[i]
        if(!vowels.includes(char)){
            newStr += char;
        }
    }

    return newStr;
}

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr