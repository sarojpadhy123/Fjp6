// "D:\FJP_6\module2\node\test.js"
let path = require('path');
// console.log(path);
let extensionname = path.extname("path");
console.log(extensionname); // it will give path
let basename = path.basename("path");
console.log(basename); // it will give basename like index.html or path.js
console.log(__dirname); // it will give directory this directory name is node
console.log(__filename); // it will give file name this file is path

let dirpath = __dirname;
console.log(dirpath);
let newFilePath = path.join(dirpath, "test.js");
console.log(newFilePath); // it will add new file