const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "회원 API",
      version: "1.0.0",
      description: "회원 API(가입 / 로그인 / 수정 / 탈퇴) 문서입니다.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/auth.js"], // 주석으로부터 API 문서 생성
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
