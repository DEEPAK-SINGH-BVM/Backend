// what is http
// => http hyper text transfer protocol is use for create HTTP server and HTTP request

const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end("Home Page");
  } else if (url === "/login") {
    res.end("Login Page");
  } else if (url === "/signup") {
    res.end("signup Page");
  } else if (url === "/about") {
    res.end("About Page");
  } else {
    res.end("404 Page Not Found !");
  }
});

server.listen(7000, () => {
  console.log("Server Start 7000!!");
});
