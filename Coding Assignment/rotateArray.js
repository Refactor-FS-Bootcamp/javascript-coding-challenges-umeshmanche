function rotateArray(arr) {
    let start = 0;
    let end = arr.length-1;

    while(start <= end) {
        let num1 = arr[start];
        let num2 = arr[end];

        // swapping
        num1 = num1 + num2;
        num2 = num1 - num2;
        num1 = num1 - num2;

        // replacing in array
        arr[start++] = num1;
        arr[end--] = num2;
    }
}

let array = [1, 2, 3, 4, 5];
rotateArray(array);
console.log(array);
