function oddishOrEvenish(x){
   sum = 0;

while (x) {
    sum += x % 10;
    x = Math.floor(x / 10);
}
if (sum % 2 == 0) {
    return "Even";
} else {
    return "Odd"
}

}

console.log(oddishOrEvenish(435));