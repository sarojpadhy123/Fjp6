let fs = require("fs");
// console.log(fs);
let path = require("path");
// // // for creating 
// // let filepath = path.join(__dirname, "file.txt");
// // console.log(filepath);

// // fs.writeFileSync(filepath, "Hello i am textfile");
// // // for reading
// // let newcontent = fs.readFileSync(filepath, "utf8");
// // console.log(newcontent);
// // // for update
// // fs.appendFileSync(filepath, "\nWelcome i am textfile");
// // console.log("After updating");
// // console.log(fs.readFileSync(filepath, "utf-8"));
// // // for deleting
// // fs.unlinkSync(filepath);
// // fs.mkdirSync("new-directory"); // it will create a new directory in the same directory
// // for checking the new directory is exists or not before
// if (!fs.existsSync("new-directory"))
//     fs.mkdirSync("new-directory");
// // here i put the if condition is the code exist before it will give a object with error and it whill give the path also the error


// //*****  READ a new directory**********//
// let folderpath = __dirname;
// let content = fs.readdirSync(folderpath);
// console.log(content);
// //*********DELETE a directory********//
// // fs.rmdirSync("new-directory");
// //********* COPY *******//
let source = path.join(__dirname, "file.txt")
let destination = path.join(__dirname, "module", "file.txt")
console.log(source);
console.log(destination);
console.log(__dirname);
fs.copyFileSync(source, destination);
// dirname then file name it should be in proper format