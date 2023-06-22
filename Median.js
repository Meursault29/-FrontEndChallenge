const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    input.sort((a, b) => a - b); 
    const mid = Math.floor(input.length / 2);
    const med = input.length % 2 === 1 ?
        input[mid] : 
        (input[mid - 1] + input[mid]) / 2;
    return med;
}

console.log(result(input));