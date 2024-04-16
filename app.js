const readline = require('readline');
const { bubbleSort } = require('./sorting');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers to be sorted (comma-separated): ', input => {
    const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    const sortedNumbers = bubbleSort(numbers);
    console.log('Sorted numbers:', sortedNumbers);
});

rl.on('close', () => {
    console.log('Program terminated.');
    process.exit(0);
});
