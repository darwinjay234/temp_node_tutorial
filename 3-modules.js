//CommonJS, every file is module (by defualt)
//Modules - Encapsulated Code (only share minimum)
const names = require("./4-names"); //always start with ./ on path.
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
console.log(data);
require("./7-mind-grenade");
sayHi("david");
sayHi(names.darwin);
sayHi(names.jay);
