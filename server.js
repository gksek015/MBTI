import jsonServer from "json-server";
import auth from "json-server-auth";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// 미들웨어 및 인증 설정
server.db = router.db; // json-server-auth는 반드시 이 설정이 필요
server.use(middlewares);
server.use(auth); // 인증 추가
server.use(router);

// 서버 실행
server.listen(5000, () => {
  console.log("JSON Server is running on http://localhost:5000");
});
