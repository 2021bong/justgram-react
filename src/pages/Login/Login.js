import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import LoginInput from './LoginInput';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const [idValue, setIdValue] = useState();
  const [pwValue, setPwValue] = useState();
  const idInputRef = useRef('');
  const pwInputRef = useRef('');

  const ableLoginBtn = (s) => {
    let idValue = idInputRef.current.value;
    let pwValue = pwInputRef.current.value;
    setIdValue(idValue);
    setPwValue(pwValue);
    if (idValue.includes('@') && idValue.length >= 5 && pwValue.length >= 5) {
      setDisabled((prev) => !prev);
    }
  };

  return (
    <div className="container flex-center">
      <div className="login-container">
        <h1 className="login-title">justgram</h1>
        <form className="login-form">
          <LoginInput
            id="uid"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onAbleLoginBtn={ableLoginBtn}
            ref={idInputRef}
          ></LoginInput>
          <LoginInput
            id="upw"
            type="password"
            placeholder="비밀번호"
            onAbleLoginBtn={ableLoginBtn}
            ref={pwInputRef}
          ></LoginInput>
          <Link to="/">
            <button id="login-btn" disabled={disabled}>
              로그인
            </button>
          </Link>
        </form>
        <div className="flex-center">
          <a className="find-pw" href="#">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
