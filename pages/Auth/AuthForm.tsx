import React, { useEffect, useState } from 'react';
import '@css/Auth/AuthForm.css';
import axios from 'axios';
import getErrorMsg from '@globalObj/getErrorMsg';

interface Props {
  signUpMode: boolean;
  setSignUpMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthForm(props: Props) {
  const { signUpMode, setSignUpMode } = props;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const login = () => {
    axios
      .post(`http://${process.env.IP_ADDRESS}/auth/login.php`, {
        login_id: id,
        login_pw: password,
      })
      .then(() => {
        alert('로그인 되셨습니다');
      })
      .catch((error) => {
        alert(getErrorMsg(error.response.status));
      });
  };

  const signUp = () => {
    axios
      .post(`http://${process.env.IP_ADDRESS}/auth/signup.php`, {
        login_id: id,
        login_pw: password,
      })
      .then(() => {
        alert('회원가입 되셨습니다');
        setSignUpMode(false);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    if (signUpMode) {
      if (password === passCheck) signUp();
      else setErrorMessage('비밀번호 재입력이 다릅니다!');
    } else login();
  };

  const onChange = (e: any) => {
    setErrorMessage('');
    if (e.target.id === 'id') setId(e.target.value);
    else if (e.target.id === 'password') setPassword(e.target.value);
    else if (e.target.id === 'passCheck') setPassCheck(e.target.value);
  };

  return (
    <div className="authForm">
      <form className="authForm-form" onSubmit={onSubmit} method="post">
        <div className="authForm-forFlex">
          <div className="authForm-label">
            <span>아이디</span>
          </div>
          <input
            className="authForm-input"
            id="id"
            name="login_id"
            placeholder="id 소문자"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = 'id 소문자')}
            onChange={onChange}
            maxLength={15}
          ></input>
        </div>
        <div className="authForm-forFlex">
          <div className="authForm-label">
            <span>비밀번호</span>
          </div>
          <input
            className="authForm-input password"
            id="password"
            name="login_pw"
            type="password"
            placeholder="아무거나 가능"
            onFocus={(e) => (e.target.placeholder = '')}
            onBlur={(e) => (e.target.placeholder = '아무거나 가능')}
            onChange={onChange}
            maxLength={15}
          ></input>
        </div>
        {signUpMode && (
          <>
            <div className="authForm-forFlex">
              <div className="authForm-label">
                <span>비번확인</span>
              </div>
              <input
                className="authForm-input passCheck"
                id="passCheck"
                type="password"
                placeholder="비밀번호 재입력"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = '비밀번호 재입력')}
                onChange={onChange}
                maxLength={15}
              ></input>
            </div>
          </>
        )}
        <div className="authForm-buttonWrapper">
          <div className="authForm-error_message">
            <span>{errorMessage}</span>
          </div>
          <button className="button">{signUpMode ? '회원가입' : '로그인'}</button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
