const fs = require("fs");
// fs module is fileSystem module is use for creating CRUD on files

// fs.writeFileSync is use for create file
// fs.writeFileSync("text.txt", "hello Node js");
// console.log("File Created Successfully !!");

// fs.readFileSync is use for read inside the file
// const data = fs.readFileSync("text.txt","utf8")
// console.log("File Data ",data);

// writeFile → Creates a new file or overwrites existing content.
// appendFile → Adds content to the end of a file without removing existing data.
// fs.appendFileSync("text.txt","Hello Second Time ")

// fs.unlinkSync is use for delete File
// fs.unlinkSync("text.txt")

// Async Method
// const fs = require("fs");

// fs.writeFile("text.txt", "Hello Second Time", (err) => {
//   if (err) {
//     console.log("File Not Create" + err);
//     return;
//   }
//   console.log("File Created !!");
// });

// fs.readFile("text.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error File Not Read " + err);
//     return;
//   }
//   console.log("File Content :", data);
// });

// fs.appendFile("text.txt", "HY tHERE", (err) => {
//   if (err) {
//     console.log("File Not Updated " + err);
//     return;
//   }
//   console.log("File Updated !!");
// });

// fs.unlink("text.txt", (err) => {
//   if (err) {
//     console.log("File Not Exist !!");
//    return
//   }
//   console.log("File Delete ");
// });