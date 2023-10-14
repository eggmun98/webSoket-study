import express from "express";
import cors from "cors";

const app = express();

const PORT = 4000;

app.use(cors());
app.use("/api/test", (req, res) => {
  console.log("작동");
  res.send("연결 성공");
});
const handleListening = () => console.log("서버 시작 테스트");

app.listen(PORT, handleListening);
