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

                        <div class="header-center">
                            <nav>
                                <ul>
                                    <Link to="/"><li><a href="">Home</a></li></Link>
                                    <Link to="/artlovers/"><li><a href="">Art Lovers</a></li></Link>
                                    <Link to="/artists"><li><a href="">Artists</a></li></Link>
                                </ul>
                            </nav>
                        </div>

                        <div className={`header-right ${nightTheme ? 'night' : ''}`} >
                            <img src={LoupeIcon} alt="search" className={`icon-loop ${nightTheme ? 'night' : ''}`}/>
                            <img src={AccountIcon} alt="my account" className={`icon-account ${nightTheme ? 'night' : ''}`}/>
                            <img src={LittleHeart} alt="heart" className="icon-heart"/>

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