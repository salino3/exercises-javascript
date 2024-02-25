

function sumaNumerosPares(n) {

    let x = [];
    for (let i = 0; i < n + 1; i++ ){
        if (i % 2 == 0){
            x.push(i)
        };
    };
    return x.reduce((a, b) => {
        return a += b;
    }, 0)
};

console.log(sumaNumerosPares(10)); 

//

function encontrarMaximo(array) {
   return Math.max.apply(Math, array);
};

console.log(encontrarMaximo([3, 11, 6, 2, 8])); 


//


function esPalindromo(str) {
  let re = /\s/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");

  return reverseStr === lowRegStr;
}

console.log(esPalindromo("anita lava la tina")); 
console.log(esPalindromo("Hola mundo")); 

//

const array = [1, 2,[ {num1: 7, num2: 9}, [{num3: 11}]], [3, [4]], 5, [6, [7, 8]]];
const arrayAplanado = array.flat(2);

console.log(arrayAplanado); 
console.log(arrayAplanado[3].num3); 

//
console.log("--------------"); 


const array2 = [1, 2, [3, 4], 5, [6, 7, 8]];
const arrayAplanado2 = array2.map(item => Array.isArray(item) ? item.flat() : item);

console.log(arrayAplanado2); // Output: [ 1, 2, [ 3, 4 ], 5, [ 6, 7, 8 ] ]


//


function revertWords (word) {
  
    const revertedWord = word.split(" ").reverse().join(" "); 
    return revertedWord;
}

console.log(revertWords("Hola Carlos"))

//
console.log("---------------------")

//given string
var str = "The quick brown fox jumps over the lazy dog"

//function to count number of vowels in a string
function countVowels(s) {
  //regex to get vowels
  var c = s.match(/[aeiou]/gi);
    console.log(c.length);
    
    const countingvowels = {a: 0, e: 0, i: 0, o: 0, u: 0};
    
    for(const word of c) {
        switch (word) {
          case "a":
          case "A":
            countingvowels.a += 1;
            break;
          case "e":
          case "E":
            countingvowels.e = countingvowels.e + 1;
            break;
          case "i":
          case "I":
            countingvowels.i = countingvowels.i += 1;
            break;
          case "o":
          case "O":
            countingvowels.o = countingvowels.o += 1;
            break;
          case "u":
          case "U":
            countingvowels.u = countingvowels.u + 1;
            break;

        };
    };

    return countingvowels
};
  
console.log(countVowels(str));
