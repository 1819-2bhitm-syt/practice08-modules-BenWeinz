const fs = require("fs");
let filename = "todo.txt";

console.log("Entire content of " + filename + " will be read synchronously.");
console.log("Reading " + filename + "finished successfully.");
console.log("Meanwhile Node.js app couldn't do anything else");
console.log("Content of " + filename + ":");
let content = fs.readFileSync(filename, {encoding: "utf8"});
console.log(content);