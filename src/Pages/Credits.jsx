import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import './Credits.scss';
import Confetti from 'react-confetti';
import { useState } from "react";

function Credits () {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleShowConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };

    return (
        <>
            <Header/>
                <div className="credits-page-first-container">
                    <div className="credits-text-container">
                        <h3>Please,<br></br> I'd like to give some credits to...</h3>
                        <p>All the designers, artists, free avaible datas & contents, incredible tools as AI and even more to make this project possible for free. But not free of work for sure. Might be my first project and this won't be the last. Thank you so much. </p>
                    </div>
                    <div className="credits-card-buttons">
                        <div className="credits-buttons-card">
                        <h4>WANNA SHOW YOUR GRATITUDE ?</h4>
                        <button onClick={handleShowConfetti}>CONGRATS THEM</button>{showConfetti && <Confetti />}
                        </div>
                    </div>
                </div>

                <div className="credits-page-second-container">
                    <h2>Photographies</h2>
                    <ul>
                        <li>
                        <Link to="/photographer1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/photographer2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque photographe */}
                    </ul>

                    <h2>Illustrations/Vecteurs</h2>
                    <ul>
                        <li>
                        <Link to="/illustrator1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/illustrator2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque illustrateur/vecteur */}
                    </ul>

                    <h2>Icons</h2>
                    <ul>
                        <li>
                        <Link to="/icon1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/icon2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque icône */}
                    </ul>

                    <h2>Typographie</h2>
                    <ul>
                        <li>
                        <Link to="/typography1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/typography2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque typographe */}
                    </ul>

                    <h2>Autres Ressources</h2>
                    <ul>
                        <li>
                        <Link to="/resource1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/resource2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque autre ressource */}
                    </ul>

                    <h2>Musique/Sons</h2>
                    <ul>
                        <li>
                        <Link to="/musician1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/musician2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque musicien/compositeur */}
                    </ul>

                    <h2>Code/Scripts</h2>
                    <ul>
                        <li>
                        <Link to="/coder1">Nom de l'artiste/designer</Link>
                        </li>
                        <li>
                        <Link to="/coder2">Nom de l'artiste/designer</Link>
                        </li>
                        {/* Ajoutez plus d'éléments de liste pour chaque codeur/scripteur */}
                    </ul>
                    </div>
    
            <Footer/>    
        </>
    )
}

export default Credits;