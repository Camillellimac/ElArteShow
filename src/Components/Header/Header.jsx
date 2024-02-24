import './Header.scss'
import '../../Styles/style.scss';
import LoupeIcon from '../../Assets/icons/loupe.svg';
import AccountIcon from '../../Assets/icons/utilisateur.svg';
import LittleHeart from '../../Assets/icons/coeur.png';
import { Link } from 'react-router-dom';
import DayNightToggle from '../../Components/DayNightToggle/DayNightToggle';
import { useState } from 'react';
import MenuBurger from '../Menu/MenuBurger';



function Header() {
    const [nightTheme, setNightTheme] = useState(false);

    return (
        <header>
            <div className="first">
                <div className="header-container">
                   
                    <div className="header-left">
                        <MenuBurger/>
                        <h3><Link to="/" className={`nav-link ${nightTheme ? 'night' : ''}`}>EL ARTE SHOW</Link></h3>
                    </div>

                    

                    <div className={`header-right ${nightTheme ? 'night' : ''}`} >
                        <Link to="/searchresult"><img src={LoupeIcon} alt="search" className={`icon-loop ${nightTheme ? 'night' : ''}`}/></Link>
                        <Link to="/myaccount"><img src={AccountIcon} alt="my account" className={`icon-account ${nightTheme ? 'night' : ''}`}/></Link>
                        <Link to="/myfavsones"><img src={LittleHeart} alt="heart" className="icon-heart"/></Link>
                    </div>
                </div>

                <div className="toggle-container">
                    <DayNightToggle nightTheme={nightTheme} setNightTheme={setNightTheme} />
                </div>
            </div>
        </header>
    )
}

export default Header;
