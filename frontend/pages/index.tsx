import { useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const socket = io("http://localhost:4000");
    // 백엔드와 연결 시도

    // 연결 시도 성공 시 아래 코드 작동
    socket.on("connect", () => {
      console.log("Connected to backend");
    });

    // useEffect 내에 cleanup 함수라고 한다.
    // setInterval 함수의 clearInterval 함수와 같은 기능을 함
    // cleanup 함수를 사용해야 메모리상에서 계속 소켓이 연결된 함수를
    // 삭제 가능
    //  socket.disconnect()는 소켓 연결 종료시키는 함수 즉 백엔드와 클라이언트 연결 종료
    return () => {
      socket.disconnect();
    };
  }, []);

  const test = async () => {
    try {
      const result = await axios("http://localhost:4000/api/test");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>연결 테스트</div>
      <button onClick={test}>백엔드와 연결하기</button>
    </>
  );
}
