const http = require("http");

const server = http.createServer((req, res) => {
  // req -> incoming request
  // res -> what we are sending back
  // console.log(req);
  if (req.url === "/") {
    res.write("Welcome to our home page");
    res.end();
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back Home</a>
    `);
  }
  // res.write("Welcome to our home page");
  // res.end();
});

server.listen(5000); //see the screenshot for result of this. 5000 is port address.
