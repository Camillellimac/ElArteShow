import './Footer.scss';
import LogoInstagram from '../../Assets/icons/instagram.svg'
import { useState } from 'react';
import DayNightToggle from '../DayNightToggle/DayNightToggle';
import { Link } from 'react-router-dom';

function Footer () {
    const [nightTheme, setNightTheme] = useState(false);

    return (
    <footer>
        <div className="footer">
            <div className="toggle-container">
                <DayNightToggle setNightTheme={setNightTheme} nightTheme={nightTheme} /> 
            </div>

        <nav>
            <ul>
                <li><Link to="/" className={`nav-link ${nightTheme ? 'night' : ''}`}>ART LOVERS</Link></li>
                <li><Link to="/artists" className={`nav-link ${nightTheme ? 'night' : ''}`}>ARTISTS</Link></li>
                <li><Link to="/contact" className={`nav-link ${nightTheme ? 'night' : ''}`}>CONTACT</Link></li>
                <li><Link to="/about" className={`nav-link ${nightTheme ? 'night' : ''}`}>ABOUT</Link></li>
                <li><Link to="/myaccount" className={`nav-link ${nightTheme ? 'night' : ''}`}>ACCOUNT</Link></li>
            </ul>
        </nav>

       <div className={`line-decoration ${nightTheme ? 'night' : ''}`}></div>

        <div className="text-footer-bloc">
            <img src={LogoInstagram} alt="instagram-logo" className={`logo-insta ${nightTheme ? 'night' : ''}`}/>
            <h2>SUBSCRIBE</h2>
            <p>Sign up to receive updates on new artwork, products, events, etc. I also blog about surf and art inspiration.</p>
        </div>

        <form className="footer-form">
            <input type="text" placeholder="First Name" name="first-name" required />
            <input type="text" placeholder="Last Name" name="last-name" required />
            <input type="email" placeholder="Email Address" name="email" required />
            <button type="submit">Sign Up</button>
          </form>

        <p className="copyright">&copy; 2016-2023 Janet Meinke-Lau. All rights reserved.</p>

        </div>
    </footer>
    )
}

export default Footer; 