import { server as websocketServer } from "websocket";
import http from "http";

const server = http.createServer((req, res) => {
  console.log(`${new Date()} Received request for ${req.url}`);
  res.writeHead(404);
  res.end();
});

server.listen(8080, () => {
  console.log(`${new Date()} Server is listening on port 8080`);
});

const wsServer = new websocketServer({
  httpServer: server,
  // not use autoAccept for prod , as it will defeat all CORS faciltity in browsers
  autoAcceptConnections: true,
});

wsServer.on("request", (req) => {
  const conn = req.accept("echo-protocol", req.origin);
  console.log(`${new Date()} Connection accepted.`);

  conn.on("message", (msg) => {
    if (msg.type === "utf8") {
      console.log(`Received message: ${msg.utf8Data}`);
      conn.sendUTF(msg.utf8Data);
    } else if (msg.type === "binary") {
      console.log(`Received binary message of ${msg.binaryData.length} bytes.`);
      conn.sendBytes(msg.binaryData);
    }
  });

  conn.on("close", (reason, desc) => {
    console.log(`${new Date()} Peer ${conn.remoteAddress} disconnected.`);
  });
});
