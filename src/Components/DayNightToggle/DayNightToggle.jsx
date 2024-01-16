import './DayNightToggle.scss'; 
import sun from '../../Assets/icons/sun.png';
import moon from '../../Assets/icons/moon.png';
import React, { useState, useEffect } from 'react';


const DayNightToggle = () => {
    const [nightTheme, setNightTheme] = useState(false);

    useEffect(() => {
        document.body.dataset.theme = nightTheme ? 'night' : 'day';
    }, [nightTheme]);

    const switchTheme = () => {
        setNightTheme(!nightTheme);
    }

    return (
        <div className={`theme-container ${nightTheme ? 'night' : ''}`}>
            <div className="day-night-toggle" onClick={switchTheme}>
                <img src={nightTheme ? moon : sun} alt='toggle' />
            </div>
        </div>
    );
}

export default DayNightToggle;
