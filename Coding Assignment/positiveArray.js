function returnPositive(num) {
    return num > 0;
}

let arr = [-1, 0, 2, 4];

let res = arr.filter(returnPositive);
console.log(res);