import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';
import logo from "../imgs/logo.svg"

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo}
                        width={180}
                    />
                </div>
            </div>
            <div className='nav-menu'>
                <div className='input-div'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' placeholder='포켓몬의 이름을 입력하세요' />
                </div>
                <div className='nav-menu-right'>
                    <div className='log-in'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그인</span>
                    </div>
                    <Link to="/" className='to-home'>
                        <FontAwesomeIcon icon={faHouse} />
                        <span>홈으로</span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header