// O(n) version
// const count7 = (n) => {
//     let count = 0;
//     for(let i=1;i<=n;i++) {
//         if(String(i).includes(`7`)) {
//             count++;
//         }
//     }
//     return count;
// }


// O(logn) version
const count7 = (n) => {
    if(n < 7) {
        return 0;
    }
    
    // Number of N's digits
    let numOfDigits = Math.floor(Math.log10(n));
    
    // The table includes count-7 of 10^i to 10^(i+1)-1.
    // 1, 1~10, 10~100, ......
    let table = [0, 1];
    for (let i = 2; i <= numOfDigits; i++)  {
        table[i] = table[i - 1] * 9 + Math.ceil(Math.pow(10, i - 1)); 
    }

    // capitalDigit = n / 10^(numOfDigits)
    let capitalDigit = Math.floor(n / Math.ceil(Math.pow(10, numOfDigits))); 


    if (capitalDigit === 7) {
        // e.g. 789
        // if capital digit is equal to 7, we could count of 1 to 699 and add 700 to 789.
        return (capitalDigit) * table[numOfDigits] + (n % Math.ceil(Math.pow(10, numOfDigits))) + 1; 
    } else if (capitalDigit > 7) {
        // e.g. 897
        // if capital digit is greater than 7, we could count of 1 to 699, count 700 to 799 and count 800 to 897.
        return (capitalDigit - 1) * table[numOfDigits] + Math.ceil(Math.pow(10, numOfDigits)) + count7(n % Math.ceil(Math.pow(10, numOfDigits))); 
    } else {
        // e.g. 345
        // if capital digit is lower than 7, we could count of 1 to 299 and count 300 to 345.
        return (capitalDigit) * table[numOfDigits] + count7(n % Math.ceil(Math.pow(10, numOfDigits))); 
    }
};

const print = (n) => {
    console.log(`g(${n}) = ${count7(n)}`);
}

print(1);
print(7);
print(20);
print(70);
print(100);
print(500)
print(700);
print(789);
print(800);
print(1000);

module.exports = {
    count7
};