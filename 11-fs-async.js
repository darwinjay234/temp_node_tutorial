const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    // console.log(result);
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/result-async.txt",
          `Here is the result: ${first}, ${second}`,
          (err,
          (result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("done with this task");
          })
        );
      }
    });
  }
});
console.log("starting next task.");
//setTimeout(() => console.log("try with set"), 100);
