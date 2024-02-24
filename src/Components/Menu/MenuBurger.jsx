import { useState } from "react";
import { Link } from "react-router-dom";
import './MenuBurger.scss'

function MenuBurger () {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        console.log('Menu button clicked');
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <div className='menu-burger'>
                <button style={{border:"none"}} onClick={openMenu}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
                    <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/" className='nav-link'>Home</Link></li>
                            <li><Link to="/artists" className='nav-link'>Artists</Link></li>
                            <li><Link to="/collectionyear" className='nav-link'>Collections</Link></li>
                            <li><Link to="/random" className='nav-link'>Discover</Link></li>
                        </ul>

                        <div className="close-button" onClick={closeMenu}>
                            <span class="material-symbols-outlined">close</span>
                        </div>
                        
                    </nav>
            </div>
        </>
    )
}

export default MenuBurger;