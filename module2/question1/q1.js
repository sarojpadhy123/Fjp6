let fs = require("fs");
let path = require("path");


if (!fs.existsSync("NewFolders")) fs.mkdirSync("NewFolders");


let filekapath = path.join(__dirname, "NewFolders", "files.txt");
console.log(filekapath);

fs.writeFileSync(filekapath, "New file ban gaya");