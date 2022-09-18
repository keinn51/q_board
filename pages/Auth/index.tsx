import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AuthForm from './AuthForm';
import '@css/Auth/Auth.css';
import { useEffect } from 'react';

const Auth = () => {
  const location = useLocation();
  const [signUpMode, setSignUpMode] = useState(location.pathname === '/signup');

  const onClickMode = () => {
    setSignUpMode((prev) => !prev);
  };

  useEffect(() => {
    if (location.pathname === '/signup') setSignUpMode(true);
    else setSignUpMode(false);
  }, [location]);

  return (
    <div className={`auth-wrapper ${signUpMode ? 'signup' : 'login'} `}>
      <p className="auth-hello">QUV에 오신 것을 환영합니다.</p>
      <AuthForm signUpMode={signUpMode} setSignUpMode={setSignUpMode} />
      <p className="auth-guide">
        {signUpMode ? '알고 보니 회원가입을 하셨다면?' : '아직 가입을 안 하신 회원님은 여기로!'}
      </p>
      <p className="auth-mode_change" onClick={onClickMode}>
        {signUpMode ? '로그인' : '회원가입'}
      </p>
    </div>
  );
};

export default Auth;
