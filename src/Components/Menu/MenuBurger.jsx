import { useState } from "react";
import { Link } from "react-router-dom";
import './MenuBurger.scss'

function MenuBurger () {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [icon, setIcon] = useState("menu")

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
        setIcon(isMenuOpen ? "menu" : "close")
    }

   

    return (
        <>
            <div className='menu-burger'>
                <button style={{border:"none"}} onClick={toggleMenu}>
                    <span className="material-symbols-outlined" style={{position: "relative", top: "0.75vh"}}>{icon}</span>
                </button>
                    <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/" className='nav-link'>Home</Link></li>
                            <li><Link to="/artists" className='nav-link'>Artists</Link></li>
                            <li><Link to="/collection" className='nav-link'>Collections</Link></li>
                            <li><Link to="/random" className='nav-link'>Discover</Link></li>

                            <div className="dotted-line"></div>
                        </ul>
                          

                        <ul>
                        <li className="menu-title">& More</li>
                            <li><Link to="/blog" className='nav-link'>Blog</Link></li>
                            <li><Link to="/about" className='nav-link'>About</Link></li>
                            <li><Link to="/contact" className='nav-link'>Contact</Link></li>
                            <li><Link to="/credits" className='nav-link'>Credits</Link></li>
                        </ul>

                        <div className="account-buttons">
                        <button><Link to='/myaccount'>Log in</Link></button>
                        <button><Link to='/createanaccount'>Create account</Link></button>
                        </div>
                    </nav>
            </div>
        </>
    )
}

export default MenuBurger;