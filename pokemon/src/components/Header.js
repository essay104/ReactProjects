import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
                <div className='log-in'>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </div>
            </div>
        </>
    )
}

export default Header