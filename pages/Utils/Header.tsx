import React from 'react';
import "@css/Utils/Header.css";
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const onClickAuthBtn = (mode: string) => {
        if (mode === 'signup') navigate('/signup');
        else navigate('/login');
    }
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-logo' onClick={() => navigate('/')}>Quv Board</div>
                <div className='header-auth_box' >
                    <div className='button flex_vertical_middle' onClick={() => {
                        onClickAuthBtn('login')
                    }}>
                        <div>로그인</div>
                    </div>
                    <div className='button flex_vertical_middle' onClick={() => {
                        onClickAuthBtn('signup')
                    }}>
                        <div>회원가입</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;