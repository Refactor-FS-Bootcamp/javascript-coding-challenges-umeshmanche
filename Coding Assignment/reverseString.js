function reverseString(str) {
    str = str.split("");

    let start = 0;
    let end = str.length - 1;

    while(start <= end) {
        let a = str[start];
        let b = str[end];
        str[start++]= b;
        str[end--] = a;
    }

    return str.join("");
}

let string = "abcdefg";

console.log(reverseString(string));