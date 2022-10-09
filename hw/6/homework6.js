let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case null:
        console.log('you canceled')
        break;
    case '':
        console.log('Empty String');
        break;
    case isNaN():
        console.log('number is Ba_NaN')
        break;
    default:
        console.log('OK!')
        break;
}
