import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '@css/Auth/AuthForm.css';

interface Props {
    signUpMode: boolean;
    setSignUpMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function AuthForm(props: Props) {
    const { signUpMode, setSignUpMode } = props;
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passCheck, setPassCheck] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const login = () => { };

    const signUp = () => { };

    const onSubmit = (e: any) => { };

    const onChange = (e: any) => {
    };

    return (
        <div className="authForm">
            <form className="authForm--form" onSubmit={onSubmit}>
                <div className="authForm--forFlex">
                    <div className="authForm--label">
                        <span>아이디</span>
                    </div>
                    <input
                        className="authForm--input"
                        id="id"
                        placeholder="인트라 id 소문자"
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '인트라 id 소문자')}
                        onChange={onChange}
                        maxLength={15}
                    ></input>
                </div>
                <div className="authForm--forFlex">
                    <div className="authForm--label">
                        <span>비밀번호</span>
                    </div>
                    <input
                        className="authForm--input password"
                        id="password"
                        type="password"
                        placeholder="8 글자 이상"
                        onFocus={(e) => (e.target.placeholder = '')}
                        onBlur={(e) => (e.target.placeholder = '8 글자 이상')}
                        onChange={onChange}
                        maxLength={15}
                    ></input>
                </div>
                {signUpMode && (
                    <>
                        <div className="authForm--forFlex">
                            <div className="authForm--label">
                                <span>비번확인</span>
                            </div>
                            <input
                                className="authForm--input passCheck"
                                id="passCheck"
                                type="password"
                                placeholder="비밀번호 재입력"
                                onFocus={(e) => (e.target.placeholder = '')}
                                onBlur={(e) => (e.target.placeholder = '비밀번호 재입력')}
                                onChange={onChange}
                                maxLength={15}
                            ></input>
                        </div>
                        <div className="authForm--forFlex">
                            <div className="authForm--label">
                                <span>이메일</span>
                            </div>
                            <input
                                className="authForm--input email"
                                id="email"
                                type="email"
                                placeholder="개인이메일 가능"
                                onFocus={(e) => (e.target.placeholder = '')}
                                onBlur={(e) => (e.target.placeholder = '개인이메일 가능')}
                                onChange={onChange}
                                value={email}
                                maxLength={30}
                            ></input>
                        </div>
                    </>
                )}
                <div className="authForm--buttonWrapper">
                    <div className="authForm--error_message">
                        <span>{errorMessage}</span>
                    </div>
                    <button className="button">{signUpMode ? '회원가입' : '로그인'}</button>
                </div>
            </form>
        </div>
    );
}

export default AuthForm;
