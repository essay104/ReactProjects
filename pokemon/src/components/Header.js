import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src='https://i.namu.wiki/i/K08keDh3ZptP4PtYkFP3wiCYgAfgjL_NGCM3gbSphZhv4doTNo4JR8bUsnR6foJorXj9bFkzriOK-lyYmSNr1KCeZt_MNKZVOyYD6jTWi3hGEvqZ1PZlJ3rhOgD-Zx7iVUNfFTcZAvlET-VnxF0nfA.svg'
                        width={120}
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
            <div className='Home-gnb'>
                <Link className='Home-gnb-menu' to="/pokemonAll" >포켓몬 정보</Link>
                <div className='Home-gnb-menu'>지역 정보</div>
                <div className='Home-gnb-menu'>트레이너 정보</div>
                <div className='Home-gnb-menu'>열매 정보</div>
            </div>
        </>
    )
}

export default Header