
import './DayNightToggle.scss'; 
import sun from '../../Assets/icons/sun.png';
import moon from '../../Assets/icons/moon.png';
import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

const DayNightToggle = ({nightTheme, setNightTheme}) => {
    const [storedTheme, setStoredTheme] = useLocalStorage('theme');

    useEffect(() => {
        // Utiliser le thème enregistré s'il existe
        if (storedTheme !== null) {
            setNightTheme(storedTheme);
        }
    }, [storedTheme]); // Déclencher l'effet chaque fois que nightTheme change

    const switchTheme = () => {
        const newTheme = !nightTheme;
        setNightTheme(newTheme);
        // Enregistrer le thème dans le stockage local
        setStoredTheme(newTheme);
    };

    useEffect(() => {
        // Mettre à jour l'attribut data-theme du corps du document lorsque le thème change
        if (nightTheme) {
            document.body.setAttribute('data-theme', 'night');
        } else {
            document.body.removeAttribute('data-theme');
        }
    }, [nightTheme]); // Déclencher l'effet chaque fois que nightTheme change

    return (
        <div className={`theme-container ${nightTheme ? 'night-theme' : ''}`}>
            <div className={`day-night-toggle ${nightTheme ? 'night' : ''}`} onClick={switchTheme}>
                <img src={nightTheme ? moon : sun} alt='toggle' />
            </div>
        </div>
    );
}

export default DayNightToggle;
