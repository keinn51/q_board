import React from 'react';
import "@css/Utils/Header.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-logo'>Quv Board</div>
                <div className='header-auth_box'>
                    <div className='button flex_vertical_middle'>
                        <div>로그인</div>
                    </div>
                    <div className='button flex_vertical_middle'>
                        <div>회원가입</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;