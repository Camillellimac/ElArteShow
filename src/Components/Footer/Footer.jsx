import './Footer.scss';
import LogoInstagram from '../../Assets/icons/instagram.png'

function Footer () {
    return (
        <footer>
        <div className="footer">

        <nav>
            <ul>
                <li>ART LOVERS</li>
                <li>ARTISTS</li>
                <li>CONTACT</li>
                <li>ABOUT</li>
                <li>ACCOUNT</li>
            </ul>
        </nav>

        <div className="line-decoration"></div>

        <div className="text-footer-bloc">
            <img src={LogoInstagram} alt="instagram-logo" class="logo-insta" />
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