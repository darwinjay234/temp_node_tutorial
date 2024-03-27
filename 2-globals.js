// GLOBAL - NO WINDOW !!!!

//COMMON GLOBAL VARIABLES:
// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed.

console.log(__dirname); //returns path
console.log(__filename); //returns path with app.js
setInterval(() => {
  console.log("hello world");
}, 1000);
