// Path
// => Path module is in Built module that provide tools for handling & transform file path

// const path = require("path");

// Destructure Methods
// const {join , resolve , basename } = require("path");

// ======== BaseName ========
const path = require("path");

// with fileType
// const fileName = path.basename("/users/doc/file.txt")
// console.log("File Name :",fileName);

// without FileType you have to give name that not involved
// const withoutFileName = path.basename("/users/doc/file.txt",".txt");
// console.log("WithOutFile Name :", withoutFileName);

// ======== Join ========
// const path = require("path");

// Join Path Segments
// const fullPath = path.join("/user", "docs", "file.txt");
// console.log(fullPath);

// Relative Path & Navigation
// console.log(path.join('../system','/users','./logs','file.txt'));

// Multiple Slashes
// console.log(path.join('/user','//docs','file.txt'));

// ======== Resolve ========
// const path = require("path");
// Show  path
// console.log(path.resolve('index.js'));

// multiple Segment
// console.log(path.resolve("/Backend", "lecture-3", "file.txt"));