import React from 'react';
import "@css/Utils/Header.css";
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate = useNavigate();
    const onClickAuthBtn = () => {
        navigate('/auth');
    }
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-logo' onClick={() => navigate('/')}>Quv Board</div>
                <div className='header-auth_box' >
                    <div className='button flex_vertical_middle' onClick={onClickAuthBtn}>
                        <div>로그인</div>
                    </div>
                    <div className='button flex_vertical_middle' onClick={onClickAuthBtn}>
                        <div>회원가입</div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Header;