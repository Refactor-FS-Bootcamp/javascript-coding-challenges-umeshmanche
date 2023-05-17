function calculateAvg(arr) {
    let len = arr.length;
    let sum = 0;

    for(let i=0; i<len-1; i++) {
        sum += arr[i];
    }

    return sum / len;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(calculateAvg(arr));