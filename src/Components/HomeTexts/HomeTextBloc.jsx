import './HomeTextBloc.scss';
import '../Buttons/Buttons.scss';
import textContent from './HomeTextContent';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

function HomeTextBloc({ contentSubject }) {
    const { title, paragraph1, paragraph2, paragraph3, button } = textContent[contentSubject];

    return (
        <ParallaxProvider>
            <Parallax translateY={[12, -28]}>

                <div className="txt-container-home">
                    {title && <h2>{title}</h2>}
                    <div className="paragraph-style">
                        {paragraph1 && <p>{paragraph1}</p>}
                        <div className="paragraph-style-below">
                            {paragraph2 && <p>{paragraph2}</p>}
                            {paragraph3 && <p>{paragraph3}</p>}
                            {button && (
                                <div className="button-style--home">
                                    {button}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                
            </Parallax>
        </ParallaxProvider>
    );
}

export default HomeTextBloc;
