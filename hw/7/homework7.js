// Пункт 1
let str = '';
for (let i = 10; i < 21; i++) {
    str += i + ', ' ;
}
console.log(str);
// Пункт 2
let str1 = '';
for (let i = 10; i < 21; i++) {
    str1 += Math.pow(i, 2) + ', ' ;
}
console.log(str1);
// Пункт 3
let str2 = '';
for (let i = 1; i < 11; i++) {
    str2 += 7*i + ', ' ;
}
console.log(str2);
// Пункт 4
let sum = 0;
for( let i = 1; i < 16; i++ ) {
    sum += i;
}
console.log( sum );
// Пункт 5
let sum1 = 0;
for( let i = 14; i < 36; i++ ) {
    sum1 += i;
}
console.log( sum1 );
// Пункт 6
let sum2 = 0;
for( let i = 1; i < 500; i++ ) {
    sum2 += i;

}
console.log( sum2 / 500 );
// Пункт 7
let sum3 = 0;
for( let i = 30; i < 80; i++ ) {
    if (i % 2 == 0) {
        sum3 += i;
    }
}
console.log( sum3 );
// Пункт 8
let sum4 = '';
for( let i = 100; i < 200; i++ ) {
    if (i % 3 == 0) {
        sum4 += i + ', ' ;
    }
}
console.log( sum4 );
// Пункт 9
let numOrStr = prompt('whole number');
let sum5 = '';
let sum6 = 0;
let sum7 = 0;
for( let i = 0; i < numOrStr; i++ ) {
    if (numOrStr % i == 0) {
        sum5 += i + ', ' ;
        sum6 += i;
    }
    if (i % 2 == 0) {
        sum7 += 1;
    }
}

console.log( sum5 );
console.log( sum6 );
console.log( sum7 );
// Табличка умножения
let str99 = '';
let posin = 1;
for (let i = 1; i < 11; i++) {
    str99 += posin * i + ', ' ;
    switch (i){
        case 10:
            posin +=1;
            i -= 9;
            break;
    }
    switch (posin){
    case 11:
        i += 11;
        break;
    }
}
console.log(str99);