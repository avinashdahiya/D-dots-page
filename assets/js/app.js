let backToTopButton = document.getElementById("backToTop");
window.onscroll = function () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// java section 1
// function addNumbers() {
//     let number1 = Number(document.getElementById("num1").value);
//     let number2 = Number(document.getElementById("num2").value);
//     let number3 = Number(document.getElementById("num3").value);

//     let sum = number1 + number2 + number3;

//     document.getElementById("result").innerText = "The Sum is: " + sum;
// }
// // second 
// function isLeapYear(year) {
//     // Leap year logic
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkLeapYear() {
//     let year = parseInt(document.getElementById("yearInput").value);
//     let resultText = "";

//     if (isLeapYear(year)) {
//         resultText = year + " is a Leap Year!";
//     } else {
//         resultText = year + " is NOT a Leap Year.";
//     }

//     document.getElementById("result").innerText = resultText;
// }
// third 
// function isPalindrome(str) {
//     let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');  // Remove special characters
//     let reversedStr = cleanStr.split('').reverse().join('');
//     return cleanStr === reversedStr;
// }

// function checkPalindrome() {
//     let inputText = document.getElementById("textInput").value;
//     let resultText = "";

//     if (isPalindrome(inputText)) {
//         resultText = `"${inputText}" is a Palindrome!`;
//     } else {
//         resultText = `"${inputText}" is NOT a Palindrome.`;
//     }

//     document.getElementById("result").innerText = resultText;
// }
// fourth 
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// function calculateFactorial() {
//     let num = parseInt(document.getElementById("numberInput").value);
//     let resultText = "";

//     if (num < 0) {
//         resultText = "Please enter a non-negative number.";
//     } else {
//         let fact = factorial(num);
//         resultText = `Factorial of ${num} is ${fact}.`;
//     }

//     document.getElementById("result").innerText = resultText;
// }
// java question 1
function addThreeNumbers(a, b, c) {
    let sum = a + b + c;
    console.log("Sum is " + sum);
}

addThreeNumbers(10, 20, 30); 

// question 2

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }
}

isLeapYear(2004); 

// question 3 

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    if (str === reversed) {
        console.log("String is a palindrome");
    } else {
        console.log("String is not a palindrome");
    }
}

isPalindrome("madam"); 

// question 4 

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    console.log("Factorial of " + n + " is " + fact);
}

// question 5 


factorial(5); 

function findLargest(numbers) {
    let max = Math.max(...numbers);
    console.log("The largest number is: " + max);
}
findLargest([12, 45, 78, 23, 89, 34]); 