const http = require("http");

http.createServer((req, res) => {
    console.log("hello");
    res.end("ok hello");
}).listen(3000, () => {
    console.log("ok!");
});