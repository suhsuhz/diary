import '../styles/Header.scss';
import { LOGO_IMAGE } from '../common/constant';
import { Link } from 'react-router-dom';
import { setHeader } from '../redux/slices/headerSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function Header() {
    const HeaderData = useSelector((state) => state.header);
    const navigate = useNavigate();

    const handleClickButton = () => {
        navigate(HeaderData.url);
    }
    return (
        <header className='Header'>
            <span className='logo'>
                <Link to="/">
                    <img src={LOGO_IMAGE} alt={'로고'} />
                </Link>
            </span>
            <h1 className='headerText'>일기장</h1>
            <span className='headerButton' onClick={handleClickButton}>{HeaderData.text}</span>
        </header>
    );
}

export default Header;