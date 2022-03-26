let fs = require("fs");
let path = require("path");

let srcPath = path.join(__dirname, "files.txt");
let destPath = path.join(__dirname, "NewFolders", "files.txt");
fs.copyFileSync(srcPath, destPath);
fs.unlinkSync(srcPath);