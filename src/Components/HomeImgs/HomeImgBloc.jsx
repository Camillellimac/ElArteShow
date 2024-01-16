import { useEffect, useRef, useState } from 'react';
import './HomeImgBloc.scss'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function HomeImgBloc () {
    const randomWords = ['LOVE', 'PEACE', 'ART', 'WILD', 'A NEW VISION', 'DREAM', 'WISDOM', 'GREATNESS', 'FREEDOM', 'REFLECTION', 'FULFILLMENT', 'JOY', 'HAPPINESS']
    const [randomWord, setRandomWord] = useState('');

    useEffect(() => {
        updateRandomWord(); 
        const interval = setInterval(updateRandomWord, 500)
        return () => clearInterval(interval)
    })

    const updateRandomWord = () => {
        const randomIndex = Math.floor(Math.random()* randomWords.length)
        const newRandomWord = randomWords[randomIndex]
        setRandomWord(newRandomWord)
    }

    const handleH1Click = () => {
        clearInterval(intervalRef.current)
        updateRandomWord();
        const interval = setInterval(updateRandomWord, 500);
        intervalRef.current = interval;
    }
    const intervalRef = useRef(null)

    return (

        <ParallaxProvider>
            <Parallax y={[-200, 200]} tagOuter="figure">
                <div className="img-container-home">
                    <h1 className='user-effect-free-text'>EL ARTE SHOW ME</h1> 
                    <h1 className='random-word' onClick={handleH1Click}>{randomWord}</h1>
                </div>

            </Parallax>
        </ParallaxProvider>
    )
}

export default HomeImgBloc; 