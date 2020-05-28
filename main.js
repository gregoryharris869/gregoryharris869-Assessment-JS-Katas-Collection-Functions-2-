// 1. Add (1 point)

// Write a function named "add" which takes two arguments (as input variables) and returns their sum.
// You may use built-in operators in order to finish this kata.
// For example, calling add(2, 4) should return a result of 6

function add(x, y) {
    return x + y;
}

console.log(add(2, 4));
console.log(add(5, 9));

// 2. Multiply (2 points)

// Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.
// For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:
// 6 + 6 + 6 + 6 = 24

function multiply(x, y) {
    let answer = 0
    for (let i = 0; i < y; i++) {
        answer = add(answer, x)
    }
    return answer
}

console.log(multiply(6, 4));
console.log(multiply(12, 8));

// 3. Power/Exponentiation (2 points)

// Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
// You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.
// For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:
// 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256

function power(x, n) {
    let total = 1
    for (let i = 0; i < n; i += 1) {
        total = multiply(x, total)
    }
    return total
}
console.log(power(2, 8));
console.log(power(4, 16));


// 4. Factorial (2 points)

// Write a function named "factorial" which takes a single argument and returns the factorial of that value.
// You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.
// A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:
// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.

function factorial(x) {
    let total = 1
    for (let i = 1; i <= x; i++) {
        total = multiply(i, total)
    }
    return total
}
console.log(factorial(4));
console.log(factorial(8));

//Bonus: Fibonacci (3 points)

// Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.
// You may not use built-in math operators or functions (such as the * multiplication operator). //////Instead, you will use functions you wrote in earlier katas to write this function.
// For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:
// 0  1  1  2  3  5  8  [13]  21
// So, the number in brackets is the 8th Fibonacci number.

function fibonacci(x) {
    let firstNum = 0
    let secondNum = 1
    let realNum
    for (let i = 2; i < x; i++) {
        realNum = add(firstNum, secondNum)
        firstNum = secondNum
        secondNum = realNum
    }
    if (x === 1) {  // strict equality//
        return 0
    }
    if (x === 2) {  // strict equality//
        return 1
    }
    else {
        return realNum   //show real number//
    }

}
console.log(fibonacci(8));
console.log(fibonacci(16));









