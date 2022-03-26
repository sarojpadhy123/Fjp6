let fs = require('fs');
const path = require('path');
let folderpath = path.join(__dirname, "organisedpath");
let content = fs.readdirSync(folderpath);
let extArr = [];
for (let i = 0; i < content.length; i++) {
    let name = content[i];
    let extname = path.extname(name);
    extArr.push(extname);
}