const fs = require("fs");
// fs module is fileSystem module is use for creating CRUD on files

// fs.writeFileSync is use for create file it was [blocking] 
// fs.writeFileSync("text.txt", "hello Node js2");
// console.log("File Created Successfully !!");

// fs.readFileSync is use for read inside the file [utf8 is the encoding used to convert file bytes into readable text]   
// const data = fs.readFileSync("text.txt","utf8")  
// console.log("File Data ",data);   
// console.log("File Data:", fs.readFileSync("text.txt", "utf8"));

// Sync Example [Blocking]
// console.log("1️⃣ Start");
// fs.writeFileSync("text.txt", "Hello Second Time");
// console.log("📁 File write finished");
// for (let i = 0; i < 3e9; i++) {}
// console.log("2️⃣ End");

// writeFile → Creates a new file or overwrites existing content.
// appendFile → Adds content to the end of a file without removing existing data.
// fs.appendFileSync("text.txt","Hello Second Time ")
// console.log("File Updated");

// fs.unlinkSync is use for delete File
// fs.unlinkSync("text.txt")
// console.log("File Deleted");

// Async Method [non-blocking] 
// const fs = require("fs");   

// Async Example [Non-Blocking]
// console.log("1️⃣ Start");
// fs.writeFile("text.txt", "Hello Second Time", () => {
//   console.log("📁 File write finished");
// });
// console.log("2️⃣ End");
// for (let i = 0; i < 3e9; i++) {}
// console.log("3️⃣ After loop");


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