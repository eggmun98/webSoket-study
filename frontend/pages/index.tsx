import axios from "axios";

export default function Home() {
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
