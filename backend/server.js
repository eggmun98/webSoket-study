import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();
const PORT = 4000;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  // io.on("connection", ...)은 새로운 클라이언트가 연결될 때 마다 감지
  console.log("Client connected");

  socket.on("disconnect", () => {
    // socket.on("disconnect", () => {}은 클라이언트 연결이 종료될 때 마다 작동
    console.log("Client disconnected");
  });
});

app.use(cors());
app.use("/api/test", (req, res) => {
  console.log("작동");
  res.send("연결 성공");
});

const handleListening = () => console.log("서버 시작 테스트");
httpServer.listen(PORT, handleListening);
