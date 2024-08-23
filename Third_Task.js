function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    
    return parseInt(reversedString);
}

const number = 149;
const reversedNumber = reverseNumber(number);
console.log(reversedNumber);
