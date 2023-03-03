function clean(word) {
    /*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
    const cleaned = word.trim();
    const cleanedAll = cleaned.replace(/\s+/g, ' ');
    return cleanedAll;
}

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("\n FIZZBUZZ " + i)
        } else if (i % 5 == 0) {
            console.log("\n BUZZ " + i)
        } else if (i % 3 == 0) {
            console.log("\n FIZZ " + i)
        } else console.log("\n" + i)
    }
}

function deletingChars(str1, str2) {
    /*
Reto #11
* ELIMINANDO CARACTERES
* Fecha publicación enunciado: 14/03/22
* Fecha publicación resolución: 21/03/22
* Dificultad: FÁCIL
*
* Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
* - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
* - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
*/
    let out1 = [];
    let out2 = [];

    str1Char = str1.split("")
    str2Char = str2.split("")
    let pass = false;
    let k = 0;

    if (str1.length > str2.length) {
        for (let i = 0; i < str1.length; i++) {
            for (let j = 0; j < str2.length; j++) {
                if (str1Char[i] == (str2Char[j])) {
                    console.log(str1Char[i] + " Esquals " + str2Char[j])
                    pass = false;
                    k++;
                    break;
                } else {

                    pass = true;
                    console.log(str1Char[i] + " NOT Esquals " + str2Char[j])

                }

            }
            if (pass == true) {
                out1[i] = str1Char[i];
            }
        }
    } else {
        console.log("nada")
    }
    for (let i = 0; i < out1.length; i++) {
        if (out1[i]) {
            console.log("vacio")
        }
    }
    console.log(k)
    console.log("Out1= " + out1)
    return out1, out2;

}

function deletingChars(str1, str2) {
    let out1 = [];
    let out2 = [];

    const str1Char = str1.split("");
    const str2Char = str2.split("");
    let k = 0;

    if (str1.length > str2.length) {
        for (let i = 0; i < str1.length; i++) {
            let foundMatch = false;
            for (let j = 0; j < str2.length; j++) {
                if (str1Char[i] === str2Char[j]) {
                    foundMatch = true;
                    k++;
                    break;
                }
            }
            if (!foundMatch) {
                out1.push(str1Char[i]);
            }
        }
    }

    console.log("Out1 = " + out1.join(""));
    console.log("K = " + k);

    return out1;
}

function calculateAverage(numbers) {
    //Write a function called calculateAverage that accepts an array of numbers as its parameter and returns the average value of the numbers in the array. If the input array is empty, the function should return 0.
    // For example, calculateAverage([2, 4, 6, 8]) should return 5, and calculateAverage([]) should return 0.
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    let average = total / numbers.length;
    if (numbers.length == 0) {
        return 0;
    } else return average;
}

function largestNumber(numberArray) {
    //
    let major = 0;
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] > major) {
            major = numberArray[i]
        }
    }
    return major
}

function reverseString(string) {
    let reverse = string.split("").reverse();
    return reverse.toString()
}

function commonInBothArrays(numArray1, numArray2) {
    let commmonArray = [];
    let k = 0;
    let pass = false;

    for (let i = 0; i < numArray1.length; i++) {
        for (let j = 0; j < numArray2.length; j++) {
            if (numArray1[i] == numArray2[j]) {
                for (let l = 0; l < commmonArray.length; l++) {
                    if (numArray1[i] == commmonArray[l]) {
                    } else {
                        commmonArray[k] = numArray1[i]

                    }

                }
                k++
                break;
            }
        }
    }
    return commmonArray;
}

function commonInArrays(numArray1, numArray2) {
    let arrayOfCommon = [];
    let k = 0;
    for (let i = 0; i < numArray1.length; i++) {
        for (let j = 0; j < numArray2.length; j++) {
            if (numArray1[i] == numArray2[j]) {
                arrayOfCommon[k] = numArray1[i];
                k++;
                break;
            }
        }
    }

    return arrayOfCommon;
}

function checkPrimeNumber(number) {

}

function longestStringInArray(array) {
    let major = 0;
    let word;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > major) {
            word = array[i];
        }
    }
    return word;
}

function removeVowel(string) {
    let noVowel = [];
    let k = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i).match("a")) {

        } else {
            noVowel[i] = string[i]
        }
    }

    return noVowel;
}

const bubbleSort = (array) => {
    let aux;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux
            }
        }
    }
    return array;
}

function bubbleSort2(array) {
    let aux;
    for (i in array) {
        for (j in array - 1) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array
}

const sortPeopleByAge = (peopleGroup) => {
    let aux;
    for (let i = 0; i < peopleGroup.length; i++) {
        for (let j = 0; j < peopleGroup.length - 1; j++) {
            if (peopleGroup[j]["age"] > peopleGroup[j + 1]["age"]) {
                aux = peopleGroup[j]
                peopleGroup[j] = peopleGroup[j + 1];
                peopleGroup[j + 1] = aux
            }
        }
    }
    return peopleGroup;
}
const testUpperFun = () => {

    let peopleGroup = [];
    const person1 = {name: "Eismer", lastName: "Lobaina", age: 20};
    const person2 = {name: "Carlos", lastName: "Perez", age: 27};
    const person3 = {name: "Andrey", lastName: "Rodríguez", age: 16};
    const person4 = {name: "Amyis", lastName: "Jerez", age: 19};

    peopleGroup[0] = person1;
    peopleGroup[1] = person2;
    peopleGroup[2] = person3;
    peopleGroup[3] = person4;

    console.log(peopleGroup[2].age)


    console.log(sortPeopleByAge(peopleGroup))
}


const largestDiference = (numberArray) => {
    let major = 0;
    for (let i = 0; i < numberArray.length; i++) {
        for (let j = 0; j < numberArray.length - 1; j++) {
            if ((numberArray[j] - numberArray[j + 1]) > major) {
                major = (numberArray[j] - numberArray[j + 1]);
            }
        }
    }
    return major
}
const longestWord = (string) => {

}//Write a function that takes a string and returns the longest word in the string.
const commonNumber = (numArray1, numArray2) =>{
}//Write a function that takes two arrays of numbers and returns a new array that contains only the numbers that appear in both arrays.
function numberFactorial(number) {
    let result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    return result;
}//Write a function that takes a number and returns its factorial (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120).
function palindromDetector(word) {
    //this funtion receives a string and returns if it is palindrom or not
    let palindrom = false;
    let wordCharArray = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (wordCharArray[i] === wordCharArray.reverse()[i]) {
            palindrom = true;
        } else {
            palindrom = false;
            break;
        }
    }
    return palindrom;
}
function palindromDetector2(word) {
    let palindrom = true;
    let wordCharArray = word.split("");
    for (let i = 0; i < word.length; i++) {
        if (wordCharArray[i] !== wordCharArray[word.length - i - 1]) {
            palindrom = false;
            break;
        }
    }
    return palindrom;
}
//Write a function that takes an array of numbers and returns the largest difference between any two elements in the array.
const detectPrimeNumber = (number) => {

}
function sum(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
            return resolve
        } else {
            reject('Los valores deben ser números');
            return reject
        }
    });
}
const jwt = require('jsonwebtoken');

// Creamos un objeto payload que contiene la información que queremos incluir en el JWT
const payload = {
    userId: 12345,
    username: 'john.doe',
    role: 'admin'
};

// Generamos el JWT utilizando la función sign de la librería jsonwebtoken
const token = jwt.sign(payload, 'secreto');

// Imprimimos el token generado
console.log(token);

// Verificamos el token utilizando la función verify de la librería jsonwebtoken
jwt.verify(token, 'secreto', (err, decoded) => {
    if (err) {
        console.log('Token inválido');
    } else {
        console.log(decoded);
        // decoded contendrá el objeto payload que incluimos en el JWT
    }
});

const palindromDetectorTest = require('./palindromDetector');
describe('palindromDetector', () => {
    test('should return true if the word is a palindrome', () => {
        expect(palindromDetectorTest('racecar')).toBe(true);
    });

    test('should return false if the word is not a palindrome', () => {
        expect(palindromDetectorTest('hello')).toBe(false);
    });
});


describe('palindromDetector', () => {
    it('devuelve verdadero si la palabra es un palíndromo', () => {
        expect(palindromDetector('ana')).toBe(true);
        expect(palindromDetector('bob')).toBe(true);
        expect(palindromDetector('racecar')).toBe(true);
    });

    it('devuelve falso si la palabra no es un palíndromo', () => {
        expect(palindromDetector('hola')).toBe(false);
        expect(palindromDetector('javascript')).toBe(false);
    });
});


console.log(palindromDetector2("eis1esie"))