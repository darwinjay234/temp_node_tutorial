const { log } = require("console");
const os = require("os"); //no ./, looking for buit-in modules!

//info about current user.
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds.
console.log(`The System Uptime is ${os.uptime() / 3600 / 24} days`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
