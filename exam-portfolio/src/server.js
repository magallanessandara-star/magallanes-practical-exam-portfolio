const http = require("http");
http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.write("Backend server running!");
    res.end();
}).listen(4000, () => {
console.log("Server listening on http://localhost:3000");
});