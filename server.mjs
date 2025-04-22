import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// __dirname 설정
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS 사용 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 정적 파일 제공
app.use(express.static(__dirname));

// 루트 경로로 login3.html 보여주기
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login3.html"));
});

// 로그인 요청 처리 → result.ejs로 값 넘겨주기
app.get("/login", (req, res) => {
  const { userid, userpw } = req.query;

  console.log("login 호출!(GET)");
  console.log("아이디: ", userid);
  console.log("비밀번호: ", userpw);

  res.render("result", { userid, userpw }); // EJS 템플릿에 값 넘김
});

app.listen(3000, () => {
  console.log("서버 실행 중");
});
