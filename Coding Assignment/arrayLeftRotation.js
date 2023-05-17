function leftRotate(arr) {
    let length = arr.length;
    let lastElement = arr[length - 1];

    for(let i=length-1; i>0; i--) {
        arr[i] = arr[i-1];
    }
    arr[0] = lastElement;
}

let array = [1, 2, 3, 4, 5];
leftRotate(array);
console.log(array);