import '../styles/Header.scss';
import { LOGO_IMAGE } from '../common/constant';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='Header'>
            <span className='logo'>
                <Link to="/">
                    <img src={LOGO_IMAGE} alt={'로고'} />
                </Link>
            </span>
            <h1 className='headerText'>일기장</h1>
            <span className='headerButton'>글쓰기</span>
        </header>
    );
}

export default Header;