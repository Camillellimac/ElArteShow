import { useEffect, useRef, useState } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import './HomeImgBloc.scss';
import backgroundImage from '../../Assets/img/main-home-copie.png'; // Importez l'image

function HomeImgBloc() {
    const randomWords = ['LOVE', 'PEACE', 'ART', 'WILD', 'A NEW VISION', 'DREAM', 'WISDOM', 'GREATNESS', 'FREEDOM', 'REFLECTION', 'FULFILLMENT', 'JOY', 'HAPPINESS'];
    const [randomWord, setRandomWord] = useState('');
    const intervalRef = useRef(null);

    useEffect(() => {
        updateRandomWord();
        const interval = setInterval(updateRandomWord, 500);
        return () => clearInterval(interval);
    }, []);

    const updateRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
        const newRandomWord = randomWords[randomIndex];
        setRandomWord(newRandomWord);
    };

    const handleH1Click = () => {
        clearInterval(intervalRef.current);
        updateRandomWord();
        const interval = setInterval(updateRandomWord, 500);
        intervalRef.current = interval;
    };

    return (
        <ParallaxProvider>
            <Parallax translateY={[-17, 17]}>

                <div className="img-container-home">
                    <img src={backgroundImage} alt="background" className="parallax-image" />
                    <div className="text-overlay">
                        <h1 className='user-effect-free-text'>EL ARTE SHOW ME</h1>
                        <h1 className='random-word' onClick={handleH1Click}>{randomWord}</h1>
                    </div>
                </div>

            </Parallax>
        </ParallaxProvider>
    );
}

export default HomeImgBloc;