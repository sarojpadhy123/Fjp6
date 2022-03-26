let fs = require('fs');
let path = require('path');
let arr = ["audio", "video", "software", "document", "application", "other"];
let nameArr = ['abc', 'efg', 'xyz', 'def'];
let extArr = ['.mp3', '.mp4', '.exe', '.pdf', '.apk', '.wav'];

let organisedpath = path.join(__dirname, "organisedpath")
if (!fs.existsSync(organisedpath))
    fs.mkdirSync(organisedpath);

for (let i = 0; i < arr.length; i++) {
    let folderpath = path.join(organisedpath, arr[i]);
    if (!fs.existsSync(folderpath))
        fs.mkdirSync(folderpath);
    for (let j = 0; j < nameArr.length; j++) {
        let fileName = nameArr[j];
        let filePath = path.join(folderpath, fileName);
        fs.writeFileSync(filePath, "");

    }
}