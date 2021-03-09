import http from 'http'

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}


function three() {
    return 3;
}

const server = http.createServer(requestListener);
server.listen(8081);
console.log("Server is running on port 8081.")

export {three}