import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Camille from "../Assets/img/CamilleWebDev.png"
import './About.scss'
import Confetti from 'react-confetti';
import { useState } from "react";

function About () {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleShowConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 10000);
  };

    return (
        <>
            <Header/>

            <div className="about-page-container">

                <div className="about-image-container">
                    <img src={Camille} alt="CamilleWebDev"></img>
                </div>

                <div className="about-text-container">
                    <h3>A bit about...<br></br>ME</h3>
                    <p>I would like to thanks all people who made this project realisation possible. <br></br><br></br>Starting by my family and friends for the unconditionnal love and support they showed and gaved me everyday.<br></br><br></br>I am proud to show you my new growing skills, get ready,  it's just the beginning...</p>
                    <button onClick={handleShowConfetti}>CONGRATS ME</button>{showConfetti && <Confetti />}
                </div>
            </div>

            <div className="about-page-second-container">
                <p>Now, let's get down to business. Before transitioning into web development, I worked as a purchaser for nearly 4 years. These years brought me a lot, in terms of discipline and hard work, as well as methodology. I notably learned a valuable adage, 'better done than perfect'. Why purchasing? </p>
                <p>Because I was passionate about economics and particularly the raw materials market, which led me to pursue this path with the idea of becoming a raw materials purchaser. The opportunities I seized led me elsewhere, and I then specialized in computer intellectual services. This allows me today, as a new web developer in this competitive market, to have a buyer's perspective on my profession, but also a keen understanding of the skills required in the IT field.</p>
                <p>This link is not enough; it should also be noted that through this transition, I fulfilled my childhood dream. Initially, I wanted to become an astronaut, but considering the difficulty of the essential Russian language, beyond the extraordinary qualities required of an astronaut, I don't regret pursuing my second childhood dream job, or at least one close to it, as an IT engineer.</p>
                <p>The developer's job allows me to explore limitless possibilities and satisfies my insatiable thirst for learning.Now that you have a sample of my new skills, let's say it, the business is open, to your proposals.</p>
            </div>

            <Footer/>
        </>
    )
}

export default About;