import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const menuList = [
    "인기",
    "상의",
    "아우터",
    "바지",
    "원피스",
    "스커트",
    "스니커즈",
    "신발",
];

const Navbar = () => {
    return (
        <div className="nav-bar">
            <div className='nav-header'>
                <div className='toggle-menu'>
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className='login-menu'>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </div>
            </div>
            <div className='nav-logo'>
                <Link to="/">
                    <img src="https://corp.musinsa.com/images/OG.png" width={350} />
                </Link>
            </div>
            <div className='nav-menu-area'>
                <ul className='menu'>
                    {menuList.map((menu, idx) => (
                        <li key={idx}>
                            <Link to="#">{menu}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='search-box'>
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' placeholder='상품검색' />
            </div>
        </div>
    )
}

export default Navbar