console.log('Hello, Node.js!');
console.log("Directory:", __dirname);
console.log("File:", __filename);

// fs stands for File System.

// It’s a built-in Node.js module used to work with the file system (like reading/writing files).
const fs = require('fs');
fs.writeFileSync('hello.txt', 'This was written by Node.js!');
const content = fs.readFileSync('hello.txt', 'utf-8');
console.log(content);

// path is another built-in module.

// It helps you work with file and directory paths in a way that works across different operating systems (Windows, macOS, Linux).
const path = require('path');
const fullPath = path.join(__dirname, 'files', 'example.txt');

//  const os = require('os');
// This line imports Node.js's os (Operating System) module — it gives you info about the system your app is running on.const os = require('os');

console.log('OS Platform:', os.platform());      // 'linux', 'win32', 'darwin'...
console.log('OS Name:', os.type());             // 'Linux', 'Windows_NT', etc.