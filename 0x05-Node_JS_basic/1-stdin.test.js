// Test case 1: Empty input
const data1 = Buffer.from('');
const name1 = data1.toString().trim();
console.log(name1); // Output: ''

// Test case 2: Input with leading and trailing spaces
const data2 = Buffer.from('   John Doe   ');
const name2 = data2.toString().trim();
console.log(name2); // Output: 'John Doe'

// Test case 3: Input with no leading or trailing spaces
const data3 = Buffer.from('Alice');
const name3 = data3.toString().trim();
console.log(name3); // Output: 'Alice'