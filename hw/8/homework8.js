// Пункт 1
let str = '';
for (let i = 20; i < 31; i ++) {
    str += i + ', ' ;
    str += i + '.5, ' ;
}
console.log(str);
// Пункт 2
let str1 = '';
for (let i = 1; i < 11; i ++) {
    str1 += i * 374 + ', ' ;

}
console.log(str1);
//пункт 3
function isPrime(n) {
    if (!Number.isInteger(n) || n < 2 || n > 1000) return "data is incorrect";

    let k = Math.sqrt(n);
    for (let i = 2; i <= k; i++)
        if (n % i === 0) return "not a prime number";

    return "Prime number";
}

console.log(isPrime(555));
console.log(isPrime(7));

// Пункт 4
function three(num) {
    while (num % 3 == 0) {
        num /= 3;
    }
    return num == 1;
}

console.log(three(9));
console.log(three(13));