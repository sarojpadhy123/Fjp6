// // console.log("Hello World");
// //How to take input in Node.js
// let input = process.argv;
// console.log(input);
// // it will give an array our output will start from index 2
// let inputs = input[2];
// console.log(inputs);
//------------------------------------------//
let fs = require("fs");
let folderpath = process.argv[2];
// console.log(folderpath)
let folderpathexists = fs.existsSync(folderpath);

// edge cases it will give true or false 
if (folderpathexists) {
    let files = fs.readdirSync(folderpath);
    console.log("path is correct");
    console.log(files);

} else {
    console.log("path is not correct");
}
// we need to provide the path "between this" PS D:\FJP_6\module2\node\project> node fileOrganiser.js
// if the path is not correct it wil return not correct
// otherwise 
// PS D:\FJP_6\module2\node\project> node fileOrganiser.js "D:\FJP_6\module2\node\project\download"
// path is correct
// [
//   'abc.mp3',    'def.mp4',
//   'efg.mkv',    'hakh.jpeg',
//   'hij.zip',    'hjdgj.tar',
//   'hshjak.rar', 'hytr.png',
//   'ikj.pdf',    'img.jpg',
//   'jhjdh.doc',  'ttr.gif',
//   'urryh.exe'
// ]