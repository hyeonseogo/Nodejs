const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: 회원가입
 *     description: 사용자가 회원 정보를 입력하여 가입 처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: 회원가입 완료
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: 로그인
 *     description: 아이디와 비밀번호로 로그인 요청 처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: 로그인 성공
 */

/**
 * @swagger
 * /auth/user:
 *   put:
 *     summary: 회원정보 수정
 *     description: 이메일, 이름, 전화번호 등을 수정
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *               email:
 *                 type: string
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: 회원정보 수정 완료
 */

/**
 * @swagger
 * /auth/user:
 *   delete:
 *     summary: 회원탈퇴
 *     description: 단순히 아이디로 탈퇴 처리
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *     responses:
 *       200:
 *         description: 회원 탈퇴 완료
 */
// 회원가입
router.post("/signup", (req, res) => {
  res.status(201).send("회원가입 성공");
});

// 로그인
router.post("/login", (req, res) => {
  res.status(200).send("로그인 성공");
});

// 회원정보 수정
router.put("/user", (req, res) => {
  res.status(200).send("회원정보 수정 완료");
});

// 회원탈퇴
router.delete("/user", (req, res) => {
  res.status(200).send("회원 탈퇴 완료");
});

module.exports = router;
