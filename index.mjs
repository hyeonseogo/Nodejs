import { deleteUser, getUsers, updateUserEmail } from "./userRepository.mjs";
import { db } from "./db.mjs";
import { createUser } from "./userRepository.mjs";

async function main() {
  // select
  // const users = await getUsers();
  // console.log("사용자 목록: ", users);

  // insert
  // userid, userpw, name, hp, email, gender, ssn1, ssn2, zipcode, address1, address2, address3
  /*
  const newUserId = await createUser(
    "hsgo",
    "1011",
    "현서",
    "010-1111-1111",
    "hsgo@naver.com",
    "여자",
    "000000",
    "0000000",
    "12345",
    "서울 광진구 자양동",
    "11-11",
    "17층"
  );
  console.log("새 사용자 ID: ", newUserId);
  */

  // update
  /*
  const updateCount = await updateUserEmail(1, "apple@naver.com");
  console.log("수정된 사용자 수: ", updateCount);

  await db.end(); // 풀 종료(보통 사용하지 않음)
  */

  // delete
  const deletedCount = await deleteUser(6);
  console.log("삭제된 사용자 수: ", deletedCount);
}

main();
