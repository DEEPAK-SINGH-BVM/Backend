// const os = require("os");

// // OS type
// console.log("OS Type:", os.type());

// // Platform
// console.log("Platform:", os.platform());

// // CPU architecture
// console.log("CPU Architecture:", os.arch());

// // Total memory
// console.log("Total Memory:", os.totalmem());

// // Free memory
// console.log("Free Memory:", os.freemem());

// // Hostname
// console.log("Hostname:", os.hostname());

// // Uptime in seconds
// console.log("System Uptime:", os.uptime());

const os = require("os");

// Get CPU info
const cpus = os.cpus();
console.log("Number of CPU cores:", cpus.length);