import { useState } from "react";

export default function SignupStatePage() {
  const [myemail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorState, setError] = useState("");

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }
  function onClickSignup(e) {
    console.log(myemail);
    console.log(password);
    // 1.검증하기
    if (!myemail.includes("@")) {
      setError("@가 없습니다.");
    } else {
      alert("회원가입을 축하합니다.");
    }

    // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉API)
    // => 나중에
    // 3. 성공알람 보여주기
  }

  return (
    <>
      이메일: <input onChange={onChangeEmail} type="text" />
      <div>{errorState}</div>
      비밀번호: <input onChange={onChangePassword} type="password" />
      <button onClick={onClickSignup}>회원가입</button>
    </>
  );
}
