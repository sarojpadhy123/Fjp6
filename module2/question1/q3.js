let fs = require('fs');
let path = require('path');

let srcPath = path.join(__dirname, "..", "..", "..", "module1", "index.html")
let destPath = path.join(__dirname, "..", "index.html");
console.log(destPath);
fs.copyFileSync(srcPath, destPath);