
const fs = require('fs');

fs.writeFileSync('demo.txt', 'Hello World!');
console.log("File created successfully");


const data = fs.readFileSync('demo.txt', 'utf8');
console.log("File Data:", data);

fs.appendFileSync('demo.txt', '\nWelcome to Node.js');
console.log("File updated successfully");

const updatedData = fs.readFileSync('demo.txt', 'utf8');
console.log("Updated Data:", updatedData);

fs.unlinkSync('demo.txt');
console.log("File deleted successfully");