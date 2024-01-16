import './Header.scss'
import LoupeIcon from '../../Assets/icons/loupe.png';
import AccountIcon from '../../Assets/icons/utilisateur.png';
import LittleHeart from '../../Assets/icons/coeur.png';

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
                        <li><a href="">Home</a></li>
                        <li><a href="">Art Lovers</a></li>
                        <li><a href="">Artists</a></li>
                    </ul>
                </nav>
            </div>
            <div className="header-right">
                <img src={LoupeIcon} alt="search" className="icon-loop"/>
                <img src={AccountIcon} alt="myAccount" className="icon-account"/>
                <img src={LittleHeart} alt="myAccount" className="icon-heart"/>

            </div>
        </div>
        <div className="toggle-container"></div>
        </div>
    </header>

    )
}

export default Header;