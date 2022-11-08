"use strict"


//q-1

function max(x, y) {
    if (x > y) {
        return x;
    }
    else return y;
}
let x = max(23, 20);
console.log("max  :" + x);




//q-2
function maxOfThree(a, b, c) {

    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;

}

let q2 = maxOfThree(3, 6, 22)
console.log("maxOfThree :" + q2)




//3
function isVowel(x) {
    let result = false;
    if (x == "a" || x == "e" || x == "i" || x == "u" || x == "o") {
        result = true;
    }

    return result
}
x = "a"
console.log("isVowel  :" + isVowel(x))




//4
const sum = a => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];

    }
    return sum;
}

console.log("sum  :" + sum([2, 3, 4, 5]))


const multiply = x => {
    let sum = 1;
    for (let i = 0; i < x.length; i++) {
        sum *= x[i];
    }
    return sum;
}

console.log("multiply :" + multiply([2, 3, 4, 5]))

//q5

const reverse = str => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("reverse :" + reverse("jag testar"))



// q6

const findLongestWord = str => {
    let firstElement = str[0];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (firstElement > str[i + 1]) {
            count = firstElement.length;
        }
        else {
            count = str[i].length
        }
    }
    return count;
}

let longest = ["long", "short", "filmon"];
console.log("findLongestWord :" + findLongestWord(longest));




// q7

const filterLongWords = (str, x) => {

    let box = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > x) {
            box = str[i];
        }
    }
    return box;
}

console.log("filterLongWords :" + filterLongWords(["fili", "filmon", "abi"], 4));


//q8

const computeSumOfSquares = x => {
    let sum = 0;
    let temp;
    for (let i = 0; i < x.length; i++) {
        temp = x[i] * x[i];
        sum += temp;
    }
    return sum;
}

console.log("computeSumOfSquares :" + computeSumOfSquares([1,2,3]))





//9 
const printOddNumbersOnly = x => {
    let temp;
    let result = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 != 0) {
            result += x[i];
            temp += result;
        }

    }
    return result;
}

console.log("printOddNumbersOnly : " + printOddNumbersOnly([2, 5, 4, 6, 8, 5, 3, 1]))



// 10
const computeSumOfSquaresOfEvensOnly = x => {
    let temp = 0;
    let sqr = "";

    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0) {
            sqr = x[i] * x[i];
            temp += sqr
        }
    }
    return temp
}

console.log("computeSumOfSquaresOfEvensOnly :" + computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]))




// 11
const sumOfReduce = x => {
    let sum = 0;
    sum += x.reduce((x, y) => x + y);
    return sum;
}
console.log("sumOfReduce :" + sumOfReduce([1, 2]));


const multiplyOfReduce = (x) => {
    let result = 0;
    result += x.reduce((x, y) => x * y);
    return result;
}

console.log("ultiplyOfReduce :" + multiplyOfReduce([1, 2, 3]));



//Q12
const findSecondBiggest = arr => {
    let temp = 0;
    let secondLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp) {
            temp = arr[i];
        }
    }

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > secondLargest && arr[j] < temp) {
            secondLargest = arr[j]
        }

    }


    return secondLargest;
}

console.log("findSecondBiggest  :" + findSecondBiggest([19, 9, 11, 0, 12]));



//q13
function printFibo(a, b, c) {
    let sum = [];
    sum.push(b);
    sum.push(c);
    let fib = 0;
    for (let i = 2; i < a; i++) {
        fib = sum[sum.length - 2] + sum[sum.length - 1]
        sum.push(fib);
    }
    return sum;
}
console.log("printFibo :" + printFibo(10, 0, 1))