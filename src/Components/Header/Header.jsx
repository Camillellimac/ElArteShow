import './Header.scss'
import LoupeIcon from '../../Assets/icons/loupe.png';
import AccountIcon from '../../Assets/icons/utilisateur.png';
import LittleHeart from '../../Assets/icons/coeur.png';
import { Link } from 'react-router-dom';
import nightTheme from '../../Components/DayNightToggle/DayNightToggle'
import DayNightToggle from '../../Components/DayNightToggle/DayNightToggle';


function Header() {

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
                            <img src={LoupeIcon} alt="search" className="icon-loop"/>
                            <img src={AccountIcon} alt="myAccount" className="icon-account"/>
                            <img src={LittleHeart} alt="littleHeart" className="icon-heart"/>

                        </div>

                    </div>
                
                    <div className="toggle-container">
                        <DayNightToggle />
                    </div>

                </div>
            </header>

    )
}

export default Header;