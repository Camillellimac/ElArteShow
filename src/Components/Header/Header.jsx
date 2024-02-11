import './Header.scss'
import LoupeIcon from '../../Assets/icons/loupe.svg';
import AccountIcon from '../../Assets/icons/utilisateur.svg';
import LittleHeart from '../../Assets/icons/coeur.png';
import { Link } from 'react-router-dom';
import DayNightToggle from '../../Components/DayNightToggle/DayNightToggle';
import { useState } from 'react';


function Header() {
    const [nightTheme, setNightTheme] = useState(false);


    return (
            <header>
                <div className="first">
                    <div className="header-container">
                        <div className="header-left">
                            <h3>EL ARTE SHOW</h3>
                        </div>

                        <div className="header-center">
                        <nav>
                            <ul>
                                <li><Link to="/artlovers" className={`nav-link ${nightTheme ? 'night' : ''}`}>Lovers</Link></li>
                                <li><Link to="/artists" className={`nav-link ${nightTheme ? 'night' : ''}`}>Artists</Link></li>
                                <li><Link to="/" className={`nav-link ${nightTheme ? 'night' : ''}`}>Home</Link></li>
                            </ul>
                        </nav>
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