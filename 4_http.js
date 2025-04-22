const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  // 127.0.0.1:3000/
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("home");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("mypage");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("not found");
  }
});

//127.0.0.1, localhost, 192.168.9.254
server.listen(3000, () => {
  console.log("서버 실행 중");
});
